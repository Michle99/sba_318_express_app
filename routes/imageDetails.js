// routes/imageDetails.js
const express = require('express');
const router = express.Router();
const imageDetails = require('../data/imageDetails');
const images = require('../data/nature')


const baseURL = 'http://localhost:4000';
// Get the details of JSON data
router.get('/details', (req, res) => {
    
    const imageDetailsWithLinks = imageDetails.map(detail => {
        return {
            ...detail,
            links: [
                { rel: 'self', href: `${baseURL}/api/details/${detail.id}` },
            ],
        };
    });

    res.json({ imageDetails: imageDetailsWithLinks });
});

router.get('/details/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const image = images.find(img => img.id === id);
    const details = imageDetails[id];
    
    res.json({
        image: { ...image, links: [{ rel: 'self', href: `${baseURL}/api/images/${image.id}` }] },
        details: { ...details, links: [{ rel: 'self', href: `${baseURL}/api/details/${details.id}` }] }
    });
});


/******************************************** */
// GET - Display details for a specific image
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const image = images.find(img => img.id === id);
    const details = imageDetails.find(detail => detail.id === id);

    if (!image || !details) {
        return res.status(404).json({ error: 'Image details not found' });
    }

    res.render('details', { image, details });
});

module.exports = router;