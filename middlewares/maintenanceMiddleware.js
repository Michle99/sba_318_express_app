
const maintenanceMiddleware = (req, res, next) => {
    // Check if the application is under maintenance (you can replace this with your own logic)
    const isUnderMaintenance = false;
  
    if (isUnderMaintenance) {
      return res.status(503).render('maintenance'); // Assuming you have a 'maintenance.pug' template
    }
  
    // Continue processing the request if not under maintenance
    next();
};
  
module.exports = maintenanceMiddleware;
  