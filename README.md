🎟️ Event Management System

A full-stack web application that allows users to register for events, cancel registrations, and view event details.
Admins can create and manage events, while normal users can register or cancel participation.

🏗️ Tech Stack

Frontend: React.js, Axios, Tailwind CSS
Backend: Node.js, Express.js
Database: PostgreSQL

⚙️ Features
👤 User

Create a user account (choose role: user or admin)

Register for events

Cancel registration

🧑‍💼 Admin

Create new events

View event details & stats

Check registered users for each event
```
🗂️ Folder Structure
event-management/
├─ backend/
│  ├─ db.js
│  ├─ routes/
│  │  ├─ users.js
│  │  └─ events.js
│  └─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ api.jsx
│  │  └─ App.jsx
│  ├─ package.json
│  └─ ...
├─ README.md
└─ .gitignore
```
🚀 Setup Instructions
```
1️⃣ Clone the Repository
git clone https://github.com/your-username/event-management.git
cd event-management

2️⃣ Setup Backend
cd backend
npm install


Create a PostgreSQL database and update your credentials in db.js:

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'yourpassword',
  port: 5432,
  database: 'event_management'
});


Then run:

node server.js


✅ You should see:

Server running on port 3000
Connected to PostgreSQL

3️⃣ Setup Frontend

Open another terminal:

cd frontend
npm install
npm run dev


Visit 👉 http://localhost:5173/
 (or the URL shown in terminal).
```
🧩 API Endpoints
```
Users
Method	Endpoint	Description
POST	/users	Create new user
Events
Method	Endpoint	Description
POST	/events	Create new event (admin only)
GET	/events	Get all upcoming events
GET	/events/:id	Get event details
POST	/events/:id/register	Register user for event
DELETE	/events/:id/cancel	Cancel user registration
```


🧠 Notes

Make sure both frontend and backend servers are running.

Ensure PostgreSQL is active and credentials match in db.js.

This project is beginner-friendly and demonstrates clean API integration with React frontend.
