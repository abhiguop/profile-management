# 🚀 User Profile API

A robust and secure RESTful API for managing user profiles with authentication.

## ✨ Features

- **🔐 Secure Authentication**
  - JWT-based authentication
  - Password hashing with bcrypt
  - Protected routes

- **👤 User Profile Management**
  - User registration
  - Profile retrieval
  - Profile updates
  - Optional profile picture and bio

- **🛡️ Security Features**
  - Input validation
  - Error handling
  - Route protection
  - Password hashing

## 🛠️ Technical Stack

- **Backend Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** bcryptjs
- **Validation:** express-validator
- **Environment:** Node.js

## 📝 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Profile Management

```http
GET /api/profile
PUT /api/profile
```

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd user-profile-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/user-profile
JWT_SECRET=your-secret-key-here
PORT=3000
```

4. **Start MongoDB**

Ensure MongoDB is running on your system.

5. **Start the server**

```bash
npm run dev
```

## 📊 Data Models

### User Profile

```javascript
{
  email: String,      // Required, unique
  password: String,   // Required, hashed
  name: String,       // Required
  address: String,    // Required
  bio: String,        // Optional
  profilePictureUrl: String  // Optional
}
```

## 🔒 Authentication

The API uses JWT for authentication. Include the token in the Authorization header:

```http
Authorization: Bearer <your-token>
```

## 🛡️ Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Input validation
- Error handling middleware

## 📝 API Documentation

### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe",
  "address": "123 Main St",
  "bio": "Software Developer"
}
```

### Login User

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Get Profile

```http
GET /api/profile
Authorization: Bearer <your-token>
```

### Update Profile

```http
PUT /api/profile
Authorization: Bearer <your-token>
Content-Type: application/json

{
  "name": "John Doe Updated",
  "address": "456 New St",
  "bio": "Senior Software Developer",
  "profilePictureUrl": "https://example.com/new-profile.jpg"
}
```

## 🔧 Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Authentication errors
- Database errors
- Server errors

## 📦 Dependencies

- express
- mongoose
- jsonwebtoken
- bcryptjs
- dotenv
- express-validator
- cors

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.