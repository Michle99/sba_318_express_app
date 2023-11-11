// routes/index.js
const express = require('express');
const router = express.Router();
const images = require('../data/images');

router.get('/', (req, res) => {
    res.render('index', { title: 'Model', images });
});

module.exports = router;
