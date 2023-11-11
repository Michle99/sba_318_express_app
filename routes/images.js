// routes/images.js
const express = require('express');
const router = express.Router();
// const images = require('../data/images');
const images = require('../data/nature');

// Get the json data itself
router.get('/images', (req, res) => {
    res.json({ images });
});


// Render the image pug view with data
router.get('/', (req, res) => {
    res.render('images', { images });
});

module.exports = router;
