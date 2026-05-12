# Task Manager Backend (MERN Stack)

A mini backend API for task management built with **Node.js, Express, MongoDB (Mongoose), JWT authentication**, and user-based task CRUD operations.

---

## Features

### User Authentication
- User registration with hashed passwords (`bcryptjs`)
- User login with **JWT tokens**
- Cookie-based or Bearer token authentication
- Middleware to protect routes

### Task Management
- Create a task
- Get all tasks of logged-in user
- Get a single task by ID
- Update a task
- Delete a task
- Each task has:
  - `title` (required)
  - `description`
  - `status` (`pending` | `in-progress` | `completed`)
  - `dueDate` (must be a future date)
  - `user` (owner)
  - `createdAt` / `updatedAt`

### Security & Best Practices
- Passwords hashed with `bcryptjs`
- JWT authentication
- User cannot access or modify other users’ tasks
- Input validation
- Rate limiting, Helmet, HPP, CORS protection

---

## Folder Structure
project/
│
├─ app/
│ ├─ controllers/
│ │ ├─ userController.js
│ │ └─ taskController.js
│ │
│ ├─ middlewares/
│ │ └─ authMiddleware.js
│ │
│ ├─ models/
│ │ ├─ userModel.js
│ │ └─ taskModel.js
│ │
│ ├─ utility/
│ │ └─ tokenUtility.js
│ │
│ └─ config/
│ └─ config.js
│
├─ routes/
│ └─ api.js
│
├─ index.js
├─ package.json
└─ README.md


---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account or local MongoDB

---

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd project


2. Install dependencies:

npm install

3. Start the server:

npm run start      #  node index.js
npm run dev        # or if using nodemon
node --watch index.js  #if u stuck for running port

Server will run on: http://localhost:5050




API Endpoints
Auth
Method	Endpoint	Body	Description
POST	/api/register	{ name, email, password }	Register a new user
POST	/api/login	{ email, password }	Login and receive JWT token
Tasks (Protected: Authorization header required)
Method	Endpoint	Body / Params	Description
POST	/api/create	{ title, description, status, dueDate }	Create a task
GET	/api/getById/:id	:id = task ID	Get a single task
PUT	/api/updateTask/:id	{ title, description, status, dueDate }	Update a task
DELETE	/api/deleteTask/:id	:id = task ID	Delete a task
Authorization

Include token in Authorization header:

Authorization: Bearer <token>

or via HTTP-only cookie token set by login.





Dummy Data for Testing (Postman)
{
  "title": "Finish Project",
  "description": "Complete backend task manager",
  "status": "in-progress",
  "dueDate": "2026-03-01T12:00:00Z"
}



Technologies Used

Node.js

Express

MongoDB + Mongoose

bcryptjs

jsonwebtoken

Helmet, HPP, CORS

express-rate-limit

Postman for testing