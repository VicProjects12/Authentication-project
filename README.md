# 🔐 Authentication Project

A full-stack authentication system built from scratch with Node.js, Express, and MongoDB. Users can register, log in, and access a protected dashboard — all secured with JWT tokens and bcrypt password hashing.

> Built as a portfolio project to understand how real-world authentication works under the hood.

---

## 🚀 Features

- ✅ User Registration with password hashing (bcrypt)
- ✅ User Login with JWT token issued on success
- ✅ Protected Dashboard — only accessible when logged in
- ✅ Token stored in localStorage and sent with requests
- ✅ Duplicate email detection on registration
- ✅ Password confirmation validation on frontend
- ✅ Error messages displayed inline on all forms
- ✅ Glassmorphism UI design

---

## 🛠 Tech Stack

### Backend
| Tool | Purpose |
|------|---------|
| Node.js | Runtime environment |
| Express.js | Server and routing |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| bcryptjs | Password hashing |
| jsonwebtoken | JWT creation and verification |
| dotenv | Environment variable management |
| cors | Cross-origin request handling |

### Frontend
| Tool | Purpose |
|------|---------|
| HTML/CSS | Structure and styling |
| JavaScript (Vanilla) | Form logic and fetch API calls |
| LocalStorage | Token persistence |

---

## 📁 Project Structure

```
Authentication_project/
│
├── backend/
│   ├── models/
│   │   └── User.js           # Mongoose user schema
│   ├── routes/
│   │   └── auth.js           # Register and login routes
│   ├── middleware/
│   │   └── auth.js           # JWT verification middleware
│   ├── .env                  # Environment variables (not committed)
│   ├── .gitignore
│   ├── server.js             # Entry point
│   └── package.json
│
└── frontend/
    ├── register.html         # Registration page
    ├── login.html            # Login page
    ├── dashboard.html        # Protected dashboard
    ├── style.css             # Shared styles
    └── script.js             # Shared JS utilities
```

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have these installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local) or a [MongoDB Atlas](https://www.mongodb.com/atlas) account

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/authentication-project.git
cd authentication-project
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Set up environment variables
Create a `.env` file inside the `backend/` folder:
```
MONGO_URI=mongodb://localhost:27017/myauthapp
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d
PORT=5000
```
> ⚠️ Never commit your `.env` file. It is already in `.gitignore`.

### 4. Start the backend server
```bash
node server.js
```
You should see:
```
Server started on port 5000
Database connected
```

### 5. Open the frontend
Open `frontend/register.html` with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code, or simply open the file in your browser.

---

## 🔑 How Authentication Works

```
REGISTER
User fills form → Frontend validates → POST /api/auth/register
→ Backend checks for duplicate email
→ Password hashed with bcrypt
→ User saved to MongoDB
→ JWT token issued and returned
→ Token saved to localStorage
→ Redirect to dashboard

LOGIN
User fills form → POST /api/auth/login
→ Backend finds user by email
→ bcrypt compares entered password to stored hash
→ If match → JWT token issued and returned
→ Token saved to localStorage
→ Redirect to dashboard
```

---

## 🔒 API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and receive JWT |

---

## 🌱 What's Next

Features planned for future versions:

- [ ] Refresh token implementation
- [ ] Logout with token blacklisting
- [ ] Rate limiting on login endpoint
- [ ] Role-based authorization (admin vs user)
- [ ] OAuth — Google and GitHub login
- [ ] Migrate database to PostgreSQL with Prisma

---

## 📚 What I Learned

This project was built specifically to understand authentication from the ground up — not just how to use libraries, but why each piece exists.

Key concepts practiced:
- Why passwords must be hashed and never stored in plain text
- How JWT tokens are structured, signed, and verified
- The difference between authentication (who are you?) and authorization (what can you do?)
- How middleware works as a reusable security layer
- Debugging frontend-to-backend communication using DevTools

---

## 👤 Author

**Victor**
- GitHub: [@VicProjects12](https://github.com/VicProjects12)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).