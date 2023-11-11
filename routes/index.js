// routes/index.js
const express = require('express');
const router = express.Router();
const images = require('../data/nature');

// Get the JSON data
router.get('/index', (req, res) => {
    const baseURL = 'http://localhost:4000';
    const imagesWithLinks = images.map(image => {
        return {
            ...image,
            links: [
                { rel: 'self', href: `${baseURL}/api/index/${image.id}` },
            ],
        };
    });

    res.json({ images: imagesWithLinks });
});

// Display index view
router.get('/', (req, res) => {
    res.render('index', { title: 'Nature', images });
});

module.exports = router;
