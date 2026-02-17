#  YouTube-Style Backend API (Learning Project)

This project is a **backend-only application** inspired by core YouTube functionalities.  
It is built purely for **learning and practice purposes** while following backend development best practices.

The goal of this project is to strengthen understanding of:
- RESTful API design
- Authentication & authorization
- Database modeling
- Scalable backend architecture

---

##  Features Implemented

- User Authentication (Register / Login)
- JWT-based Authorization
- Video Upload Metadata (Title, Description, Thumbnail, etc.)
- Like / Dislike System
- Comments on Videos
- Channel / User Profiles
- Subscribe / Unsubscribe Functionality
- View Count Tracking
- Protected Routes & Middleware
- Proper Error Handling & Response Structure

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Tokens)**
- **bcrypt**
- **Multer** (for file handling - optional)
- **dotenv**

---

##  Project Structure

```bash
src/
│
├── controllers/      # Business logic
├── models/           # Mongoose schemas
├── routes/           # API routes
├── middlewares/      # Auth & error handling
├── utils/            # Helper functions
├── config/           # DB & environment config
└── server.js         # App entry point
