// customHeaderMiddleware.js
const customHeaderMiddleware = (req, res, next) => {
    // Set a custom header on the response
    res.setHeader('X-Server-Name', 'MyExpressApp');
    next();
};
  
module.exports = customHeaderMiddleware;
  