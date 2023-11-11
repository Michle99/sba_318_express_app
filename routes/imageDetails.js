// routes/imageDetails.js
const express = require('express');
const router = express.Router();
const imageDetails = require('../data/imageDetails');

router.get('/', (req, res) => {
    res.render('imageDetails', { imageDetails });
});

module.exports = router;
