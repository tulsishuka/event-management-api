import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API_URL}/events/`);
      setEvents(res.data);
    } catch (err) {
      alert("Error fetching events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Upcoming Event</h2>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            {e.title} | {new Date(e.datetime).toLocaleString()} | {e.location} | Cepacity: {e.capacity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
