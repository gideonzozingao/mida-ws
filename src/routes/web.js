var express = require('express');
var router = express.Router();
const aboutRoute = require('./web/about');
const projectsRoutes = require('./web/projects');
const blogsRoutes = require('./web/blogs');
const newsAndEvents=require('./web/news');
const  contacts=require('./web/contact-us')
router.get('/', function (req, res, next) {
  
    res.render('index', { title: 'Makini Intergrated Developement Agency' });
  });
  
  //All the web routes
  router.use('/about', aboutRoute);
  router.use('/projects', projectsRoutes);
  router.use('/blogs', blogsRoutes);
  router.use('/news', newsAndEvents);
  router.use('/contactus', contacts);
  module.exports = router;