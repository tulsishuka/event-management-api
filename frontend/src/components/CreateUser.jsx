import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

const CreateUser = ({ onUserCreated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async () => {
    if (!name || !email) return alert("Name and email  required");
    try {
      const res = await axios.post(`${API_URL}/users/create`, { name, email, role });
      alert(`User created successfully! ID: ${res.data.id}`);
      onUserCreated(res.data); 
      setName(""); setEmail(""); setRole("user");
    } catch (err) {
      alert(err.response?.data?.error || "Error creating user");
    }
  };

  return (
 

    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
   create users
  </h2>

  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={e => setName(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <select
      value={role}
      onChange={e => setRole(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  </div>

  <button
    onClick={handleSubmit}
    className="mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200"
  >
    Create User
  </button>
</div>

  );
};

export default CreateUser;
