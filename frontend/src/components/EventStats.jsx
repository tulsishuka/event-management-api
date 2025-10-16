
import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

const EventStats = () => {
  const [eventId, setEventId] = useState("");
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_URL}/events/${eventId}/stats`);
      setStats(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Error  stats");
    }
  };

  return (
   
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
    Event Stats
  </h2>

  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Event ID"
      value={eventId}
      onChange={e => setEventId(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      onClick={fetchStats}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg  transition duration-200"
    >
      Get Stats
    </button>
  </div>

  {stats && (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
      <p className="mb-2 text-gray-700">
        <span className="font-semibold">Total Ragistretions:</span> {stats.totalRegistrations}
      </p>
      <p className="mb-2 text-gray-700">
        <span className="font-semibold">Remainng Capacity:</span> {stats.remainingCapacity}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Percentge Used:</span> {stats.percentageUsed}%
      </p>
    </div>
  )}
</div>

  );
};

export default EventStats;
