// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../data/users'); // Assuming your user data is in a file named 'users.js'

router.get('/', (req, res) => {
    res.render('users', { title: 'Photographers', users: users });
});

module.exports = router;

// Add links to the routes to conform to rest principles