const express = require('express');
const router = express.Router();
const pool = require('../db');

// create user route to add new users and admin
router.post('/create', async (req, res) => {
    const { name, email, role = 'user' } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO users (name, email, role) VALUES ($1, $2, $3) RETURNING *",
            [name, email, role]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;
