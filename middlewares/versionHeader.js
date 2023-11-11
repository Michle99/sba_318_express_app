const versionHeader = (req, res, next) => {
  // Set a custom header indicating the application version
  res.setHeader('X-Application-Version', '1.0.0');

  next();
};

module.exports = versionHeader;
