import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticateToken } from '../middleware/auth.js';
import { User } from '../models/User.js';

const router = express.Router();

// Profile update validation
const profileUpdateValidation = [
  body('name').optional().trim().notEmpty(),
  body('address').optional().trim().notEmpty(),
  body('bio').optional().trim(),
  body('profilePictureUrl').optional().isURL()
];

// Get user profile
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    const profile = await User.findById(req.user.userId)
      .select('-password');

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    next(error);
  }
});

// Update user profile
router.put('/', authenticateToken, profileUpdateValidation, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, address, bio, profilePictureUrl } = req.body;
    
    const updateData = {};
    if (name) updateData.name = name;
    if (address) updateData.address = address;
    if (bio !== undefined) updateData.bio = bio;
    if (profilePictureUrl) updateData.profilePictureUrl = profilePictureUrl;

    const updatedProfile = await User.findByIdAndUpdate(
      req.user.userId,
      updateData,
      { new: true }
    ).select('-password');

    if (!updatedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json(updatedProfile);
  } catch (error) {
    next(error);
  }
});

export default router;