// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const imagesRouter = require('./routes/images');
const imageDetailsRouter = require('./routes/imageDetails');
const handleErrors = require('./middlewares/errorMiddleware');
const versionHeader = require('./middlewares/versionHeader');
const customHeaderMiddleware = require('./middlewares/customHeaderMiddleware');
const maintenanceMiddleware = require('./middlewares/maintenanceMiddleware');


const app = express(); 


// Custom middleware for logging requests
app.use(versionHeader);
app.use(customHeaderMiddleware);


// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// serving maintenance middleware
app.use(maintenanceMiddleware);

// Routes For Pug View
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', imagesRouter);
app.use('/details', imageDetailsRouter);

// Routes for JSON Data
app.use('/api', indexRouter);
app.use('/api', usersRouter);
app.use('/api', usersRouter);
app.use('/api', imagesRouter);
app.use('/api', imageDetailsRouter);


// Use the error-handling middleware
app.use(handleErrors);


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
