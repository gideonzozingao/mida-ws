
/**
 * Import all neccesary modules  * 
 */

const webRoutes=require('./web')
const apiRoutes=require('./api/index');
const adminRoutes=require('./admin/index');
var express = require('express');

/**
 * Initialize the router middleware here  and use  to to handle all routes* 
 */
var router = express.Router();

/**
 * Handle all web routes and serving of Static files and Dynamic Information
 * 
 */
router.use('/',webRoutes);

/**
 * Handle all API class and routes  routes and serving of Static files and Dynamic Information
 * 
 */
router.use('/api', apiRoutes);
router.use('/admin',adminRoutes)

/**
 * Resolve to displaying the 404 page  all unknow routes
 * 
 */
router.use('*', (req, res) => {
  res.render("errors/404",{title:"404 | Not found"})
})
module.exports = router;
