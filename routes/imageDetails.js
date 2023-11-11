// routes/imageDetails.js
const express = require('express');
const router = express.Router();
const imageDetails = require('../data/imageDetails');
const images = require('../data/nature')

// Get the json data itself
router.get('/details', (req, res) => {
    res.json({ imageDetails });
});

// GET - Display details for a specific image
router.get('/details/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const image = images.find(img => img.id === id);
    const details = imageDetails[id];
    res.json({ image, details });
});


/******************************************** */
// GET - Display details for a specific image
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const image = images.find(img => img.id === id);
    const details = imageDetails[id];
    res.render('details', { image, details });
});

module.exports = router;