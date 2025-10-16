import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import RegisterEvent from './components/RegisterEvent';
import EventDetails from './components/EventDetails';
import EventStats from './components/EventStats';
import CreateUser from './components/CreateUser';

function App() {
    return (
        <Router className="">
                        <h1 className='text-4xl font-bold gap-4 mb-10'>Welcome Management Api</h1>

            <nav className='flex gap-4'>
                <Link to="/">Upcoming Events</Link> | 
                <Link to="/create-user">Create User</Link> |
                <Link to="/create">Create Event</Link> | 
                <Link to="/register">Registar</Link> | 
                <Link to="/details">Event Details</Link> | 
                <Link to="/stats">Event Stats</Link>
            </nav>
            <Routes>
                <Route path="/" element={<EventList />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/create" element={<CreateEvent />} />
                <Route path="/register" element={<RegisterEvent />} />
                <Route path="/details" element={<EventDetails />} />
                <Route path="/stats" element={<EventStats />} />
            </Routes>
        </Router>
    );
}

export default App;
