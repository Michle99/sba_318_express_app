// routes/images.js
const express = require('express');
const router = express.Router();
const images = require('../data/images');

router.get('/', (req, res) => {
    res.render('images', { images });
});

module.exports = router;
