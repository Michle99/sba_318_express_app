// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../data/users');

const baseURL = 'http://localhost:4000';

router.get('/users', (req, res) => {
    
    const usersWithLinks = users.map(user => {
        return {
            ...user,
            links: [
                { rel: 'self', href: `${baseURL}/api/users/${user.id}` },
            ],
        };
    });

    res.json({ users: usersWithLinks });
});

// GET a specific user by ID with HATEOAS links
router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const userWithLinks = {
        ...user,
        links: [
            { rel: 'self', href: `${baseURL}/api/users/${user.id}` },
        ],
    };

    res.json(userWithLinks);
});


// Render User Pug view
router.get('/', (req, res) => {
    // Adding HATEOAS links to each user
    const usersWithLinks = users.map(user => {
        return {
            ...user,
            links: [
                { rel: 'self', href: `${baseURL}/users/${user.id}` },
                { rel: 'details', href: `${baseURL}/users/${user.id}/details` },
            ],
        };
    });

    // Adding a link to the current resource (users)
    const selfLink = { rel: 'self', href: `${baseURL}/users` };

    // Constructing the response object
    const response = {
        title: 'Photographers',
        users: usersWithLinks,
        links: [selfLink],
    };

    res.render('users', response);
});

module.exports = router;

// Add links to the routes to conform to rest principles