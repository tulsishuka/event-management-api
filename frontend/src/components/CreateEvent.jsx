import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

const CreateEvent = () => {
  const [userId, setUserId] = useState(""); 
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState(100);

  const handleSubmit = async () => {
    if (!userId || !title || !datetime || !location) return alert("All fields required");
    try {
      const res = await axios.post(`${API_URL}/events/`, { userId, title, datetime, location, capacity });
      alert(`Event created successfully! Event ID: ${res.data.eventId}`);
      setTitle(""); setDatetime(""); setLocation(""); setCapacity(100);
    } catch (err) {
      alert(err.response?.data?.error || "Error creating event");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
   Admin only create events
  </h2>

  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Admin User ID"
      value={userId}
      onChange={e => setUserId(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={e => setTitle(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="datetime-local"
      value={datetime}
      onChange={e => setDatetime(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="text"
      placeholder="Location"
      value={location}
      onChange={e => setLocation(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="number"
      placeholder="Capacity"
      value={capacity}
      onChange={e => setCapacity(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <button
    onClick={handleSubmit}
    className="mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-200"
  >
    Create Event
  </button>
</div>

  );
};

export default CreateEvent;
