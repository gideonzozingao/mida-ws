var express = require('express');
const app = express();
// view engine setup

app.get('/', (req, res,next) => {

    res.render("blogs/index.ejs", { title: 'Blogs | Makini Intergrated Developement Agency' })

})
app.get('/*', (req, res,next) => {

    res.render("errors/404.ejs", { title: '404 | Not Found' })

})
module.exports = app;