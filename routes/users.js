// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../data/users'); // Assuming your user data is in a file named 'users.js'

router.get('/', (req, res) => {
    res.render('users', { title: 'Models', users: users });
});

module.exports = router;