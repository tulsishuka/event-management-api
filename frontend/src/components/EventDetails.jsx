import React, { useState } from 'react';
import { getEvent } from '../api';

const EventDetails = () => {
    const [eventId, setEventId] = useState('');
    const [event, setEvent] = useState(null);

    const fetchEvent = () => {
        getEvent(eventId)
            .then(res => setEvent(res.data))
            .catch(err => alert(err.response.data.error));
    };

    return (
     
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
    Event Details
  </h2>

  <div className="flex flex-col gap-4">
    <input
      type="number"
      placeholder="Event ID"
      value={eventId}
      onChange={(e) => setEventId(e.target.value)}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      onClick={fetchEvent}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Get Details
    </button>
  </div>

  {event && (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Date & Time:</span>{" "}
        {new Date(event.datetime).toLocaleString()}
      </p>
      <p className="text-gray-700 mb-3">
        <span className="font-semibold">Location:</span> {event.location}
      </p>

      <h4 className="text-gray-800 font-semibold mb-2">Registered Users:</h4>
      <ul className="list-disc list-inside space-y-1">
        {event.registeredUsers.map(user => (
          <li key={user.id} className="text-gray-700 hover:text-blue-500">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

    );
};

export default EventDetails;
