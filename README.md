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
│  ├─ db/
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

🧩 1. Prerequisites

Make sure you have these installed:

Node.js (v18 or above)

PostgreSQL (v14 or above)

npm or yarn package manager

🗄️ 2. Database Setup (PostgreSQL)

Open pgAdmin or your SQL terminal.
Create a new database:
CREATE DATABASE event_management;
Select the database:

\c event_management

Create the necessary tables:

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(10) DEFAULT 'user'
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    datetime TIMESTAMP NOT NULL,
    location VARCHAR(100) NOT NULL,
    capacity INT NOT NULL
);

CREATE TABLE event_registrations (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE
);

⚙️ 3. Backend Setup (Node.js + Express)

Open the backend folder in terminal.

Install dependencies:

npm install


Create a .env file in the backend root:

DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=event_management


Start the backend server:

node server.js


You should see:

Server running on port 3000
Connected to PostgreSQL

💻 4. Frontend Setup (React + Axios)

Open the frontend folder in terminal.

Install dependencies:

npm install


Run the React app:

npm run dev


Open the browser →
http://localhost:5173/
```



🧠 Notes

Make sure both frontend and backend servers are running.

Ensure PostgreSQL is active and credentials match in db

This project is beginner-friendly and demonstrates clean API integration with React frontend.
