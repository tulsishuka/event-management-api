
const express = require('express');
const router = express.Router();
const pool = require('../db');


router.post('/', async (req, res) => {
    const { userId, title, datetime, location, capacity } = req.body;

    if (!userId || !title || !datetime || !location || !capacity)
        return res.status(400).json({ error: "All fields are required" });

    try {
        
        const user = await pool.query("SELECT role FROM users WHERE id=$1", [userId]);
        if (!user.rows[0] || user.rows[0].role !== 'admin') {
            return res.status(403).json({ error: "Only admins can create events" });
        }

      
        if (capacity <= 0 || capacity > 1000) return res.status(400).json({ error: "wrong capacity" });

        const result = await pool.query(
            "INSERT INTO events (title, datetime, location, capacity) VALUES ($1, $2, $3, $4) RETURNING *",
            [title, datetime, location, capacity]
        );
        res.json({ eventId: result.rows[0].id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const events = await pool.query(
            "SELECT * FROM events WHERE datetime > NOW() ORDER BY datetime ASC, location ASC"
        );
        res.json(events.rows);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const event = await pool.query("SELECT * FROM events WHERE id=$1", [id]);
        if (!event.rows[0]) return res.status(404).json({ error: " not found" });

        const registrations = await pool.query(
            "SELECT u.id, u.name, u.email FROM users u JOIN event_registrations er ON u.id = er.user_id WHERE er.event_id=$1",
            [id]
        );

        res.json({ ...event.rows[0], registeredUsers: registrations.rows });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.post('/:id/register', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) return res.status(400).json({ error: "userId is required" });

    try {
        const event = await pool.query("SELECT * FROM events WHERE id=$1", [id]);
        if (!event.rows[0]) return res.status(404).json({ error: "Event not found" });

        const count = await pool.query("SELECT COUNT(*) FROM event_registrations WHERE event_id=$1", [id]);
        if (parseInt(count.rows[0].count) >= event.rows[0].capacity)
            return res.status(400).json({ error: "Event full" });

        const alreadyRegistered = await pool.query(
            "SELECT * FROM event_registrations WHERE event_id=$1 AND user_id=$2",
            [id, userId]
        );
        if (alreadyRegistered.rows.length > 0)
            return res.status(400).json({ error: " registered  Already" });

        await pool.query("INSERT INTO event_registrations (user_id, event_id) VALUES ($1, $2)", [userId, id]);
        res.json({ message: " successfully Registered" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id/cancel', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) return res.status(400).json({ error: "userId is required" });

    try {
        const result = await pool.query(
            "DELETE FROM event_registrations WHERE user_id=$1 AND event_id=$2 RETURNING *",
            [userId, id]
        );
        if (result.rows.length === 0) return res.status(400).json({ error: "User not registered" });

        res.json({ message: "Cancelled successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/:id/stats', async (req, res) => {
    const { id } = req.params;
    try {
        const event = await pool.query("SELECT * FROM events WHERE id=$1", [id]);
        if (!event.rows[0]) return res.status(404).json({ error: "Event not found" });

        const count = await pool.query("SELECT COUNT(*) FROM event_registrations WHERE event_id=$1", [id]);
        const total = parseInt(event.rows[0].capacity);
        const used = parseInt(count.rows[0].count);

        res.json({
            totalRegistrations: used,
            remainingCapacity: total - used,
            percentageUsed: ((used / total) * 100).toFixed(2)
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
