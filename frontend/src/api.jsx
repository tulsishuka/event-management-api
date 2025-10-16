import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:3000' });

export const createUser = (data) => API.post('/users', data);
export const createEvent = (data) => API.post('/events', data);
export const getEvent = (id) => API.get(`/events/${id}`);
export const registerEvent = (id, userId) => API.post(`/events/${id}/register`, { userId });
export const cancelRegistration = (id, userId) => API.delete(`/events/${id}/cancel`, { data: { userId } });
export const getUpcomingEvents = () => API.get('/events');
export const getEventStats = (id) => API.get(`/events/${id}/stats`);
