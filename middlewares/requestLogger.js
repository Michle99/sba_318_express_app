// requestLogger.js
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toUTCString();
    const method = req.method;
    const url = req.url;
  
    console.log(`[${timestamp}] ${method} ${url}`);
  
    next();
};
  
  module.exports = requestLogger;
  