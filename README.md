# 🎬 Netflix Login Page (React + Node.js + Express)

A simple full-stack Netflix-style login page built using React for the frontend and Node.js + Express for the backend.
This project demonstrates authentication flow UI, API integration, form validation, and clean component structure.

## 🚀 Features
- Frontend (React)
- Netflix-style responsive UI
- Email & password login form
- Client-side validation
- API integration with backend
- Toast/alert for success or errors
- Clean reusable components

## Backend (Node.js + Express)

- Login API endpoint
- JWT or mock authentication (depending on your implementation)
- Error handling
- CORS enabled
- Environment variables for secrets

## 🛠️ Tech Stack
### Frontend
- React
- React Router (if used)
- Axios / Fetch API
- CSS / Tailwind / Styled Components (adjust based on your setup)

### Backend
- Node.js
- Express.js
- dotenv

## 📁 Folder Structure
```
project/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
└── server/               # Node + Express backend
    ├── index.js
    └── package.json

 ```   

## ⚙️ Installation & Setup
1️⃣ Clone the repository
```bash git clone https://github.com/yourusername/netflix-login-page.git
cd netflix-login-page
```

2️⃣ Install dependencies
  Frontend
  ```
cd client
npm install
```

Backend
```
cd ../server
npm install
```

4️⃣ Run the project

Frontend
```
cd client
npm start
```
Backend
```
cd server
npm run dev
```

The React app will run on http://localhost:5000

The Express server will run on http://localhost:3000

## 📡 API Endpoints
POST /api/login

Sample body:

{
  "email": "Admin",
  "password": "admin"
}


Response:

{
  "success": true,
}


## 🧩 Future Improvements

- Add Signup page
- Add password reset
- Connect to a real database (MongoDB / PostgreSQL)
- Add full Netflix clone features

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to improve.
