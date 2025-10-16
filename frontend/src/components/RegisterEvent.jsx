import  { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

const RegisterEvent = () => {
  const [userId, setUserId] = useState("");
  const [eventId, setEventId] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API_URL}/events/${eventId}/register`, { userId });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || " Something went wrong in registration");
    }
  };

  const handleCancel = async () => {
    try {
      const res = await axios.delete(`${API_URL}/events/${eventId}/cancel`, { data: { userId } });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || "cancellation for registration failed" );
    }
  };

  return (
   
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
    Register or Cancel Event
  </h2>

  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="User ID"
      value={userId}
      onChange={e => setUserId(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="text"
      placeholder="Event ID"
      value={eventId}
      onChange={e => setEventId(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="flex gap-4 mt-6 justify-center">
    <button
      onClick={handleRegister}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Register
    </button>

    <button
      onClick={handleCancel}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg  transition duration-200"
    >
      Cancel
    </button>
  </div>
</div>

  );
};

export default RegisterEvent;
