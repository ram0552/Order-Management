# Order Management System

A full-stack MERN CRUD application for managing customer orders efficiently.

---

# 🚀 Tech Stack

## Frontend
- React.js
- Vite
- Axios
- React Router DOM
- Tailwind CSS / CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

# 📁 Project Structure

```bash
OrderManagement/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   └── middleware/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Features

- Create Orders
- Read Orders
- Update Orders
- Delete Orders
- REST API Integration
- MongoDB Database
- Responsive UI
- Environment Variable Support
- Production Deployment Ready

---

# 📦 Installation

## 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

---

# 🔧 Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create .env file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Run backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🎨 Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Create .env file

```env
VITE_API_URL=http://localhost:5000
```

## Run frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🗄️ MongoDB Setup

Use MongoDB Atlas:

https://www.mongodb.com/cloud/atlas

Create:
- Cluster
- Database User
- Network Access

Get MongoDB connection string and add it to backend `.env`.

---

# 🔌 API Routes

| Method | Route | Description |
|---|---|---|
| GET | /api/orders | Get all orders |
| POST | /api/orders | Create order |
| PUT | /api/orders/:id | Update order |
| DELETE | /api/orders/:id | Delete order |

---

# 📄 Example Order Schema

```js
{
  customerName: String,
  product: String,
  quantity: Number,
  price: Number,
  status: String
}
```

---

# 🚀 Deployment

## Backend Deployment
Platform:
- Render

## Frontend Deployment
Platform:
- Vercel

## Database
- MongoDB Atlas

---

# 🌐 Production Environment Variables

## Backend

```env
PORT=5000
MONGO_URI=your_production_mongodb_uri
NODE_ENV=production
```

## Frontend

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

# 🛠️ Scripts

## Backend

```bash
npm run dev
npm start
```

## Frontend

```bash
npm run dev
npm run build
```

---

# 📌 Future Improvements

- JWT Authentication
- Admin Dashboard
- Pagination
- Search & Filters
- Export Orders
- Email Notifications
- Payment Integration

---

# 👨‍💻 Author

Titan

---

# 📜 License

This project is for educational and learning purposes.