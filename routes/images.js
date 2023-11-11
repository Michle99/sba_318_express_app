// routes/images.js
const express = require('express');
const router = express.Router();
const images = require('../data/nature');

// Get the json data itself
router.get('/images', (req, res) => {
    const baseURL = 'http://localhost:4000';
    const imagesWithLinks = images.map(image => {
        return {
            ...image,
            links: [
                { rel: 'self', href: `${baseURL}/api/images/${image.id}` },
            ],
        };
    });

    res.json({ images: imagesWithLinks });
});


// Render the image pug view with data
router.get('/', (req, res) => {
    res.render('images', { images });
});

module.exports = router;
