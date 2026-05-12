<h1 align="center">✅ Task Manager API</h1>

<p align="center">
  <strong>Node.js + Express + PostgreSQL + JWT</strong><br>
  Authentication & task management with future‑date validation.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/JWT-auth-000000?logo=jsonwebtokens" alt="JWT">
  <img src="https://img.shields.io/badge/license-ISC-blue" alt="ISC">
</p>

---

## ✨ Features

- ✅ User registration & login (bcrypt hashed passwords)
- ✅ JWT authentication (HTTP‑only cookie + Bearer header)
- ✅ Create, read, update, delete tasks – **user‑owned only**
- ✅ Future due date validation (rejects past dates)
- ✅ PostgreSQL with parameterised queries (safe from SQL injection)
- ✅ Rate limiting, Helmet, HPP, CORS
- ✅ Fully structured ES modules (type: module)

---

## 🗂️ Project Structure (actual)

<pre>
📦 task-manager-backend
 ┣ 📂 app
 ┃ ┣ 📂 config
 ┃ ┃ ┣ 📜 config.js         # env, JWT_SECRET, limits
 ┃ ┃ ┗ 📜 db.js             # PostgreSQL pool
 ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📜 userController.js
 ┃ ┃ ┗ 📜 taskController.js
 ┃ ┣ 📂 middlewares
 ┃ ┃ ┗ 📜 authMiddleware.js
 ┃ ┣ 📂 model
 ┃ ┃ ┣ 📜 user.query.js
 ┃ ┃ ┗ 📜 task.query.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📜 user.route.js
 ┃ ┃ ┗ 📜 task.route.js
 ┃ ┗ 📂 utility
 ┃   ┣ 📜 tokenUtility.js
 ┃   ┗ 📜 emailUtility.js   (optional)
 ┣ 📜 index.js              # Express app
 ┣ 📜 server.js             # DB connect + listen
 ┣ 📜 .env
 ┗ 📜 package.json
</pre>

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js v18+
- PostgreSQL (local or cloud)
- npm or yarn

### 2. Clone & Install
```bash
git clone https://github.com/your-repo/task-manager-api.git
cd task-manager-api
npm install

 3. Environment Variables (.env)
DATABASE_URL=postgresql://user:pass@localhost:5432/taskdb
PORT=5050
# optional: override JWT_SECRET (hardcoded fallback exists)
JWT_SECRET=your_super_secret_here

4. Database Schema

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    due_date TIMESTAMP,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

5.Start Server
npm run dev      # nodemon
npm start        # node server.js