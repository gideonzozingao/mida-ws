var express = require('express');
const app = express();
// view engine setup

app.get('/', (req, res,next) => {

    res.render("contacts/index.ejs", { title: 'Contacts | Makini Intergrated Developement Agency' })

})
app.get('/*', (req, res,next) => {

    res.render("errors/404.ejs", { title: '404 | Not Found' })

})
module.exports = app;