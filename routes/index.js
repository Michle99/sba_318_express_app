// routes/index.js
const express = require('express');
const router = express.Router();
const images = require('../data/nature');

// Get the JSON data
router.get('/index', (req, res) => {
    res.json({ images });
});

router.get('/', (req, res) => {
    res.render('index', { title: 'Nature', images });
});

module.exports = router;
