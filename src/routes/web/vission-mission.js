var express = require('express');
const app = express();
// view engine setup

app.get('/', (req, res,next) => {

    res.render("about/vission-mission/index.ejs", { title: 'Vission & Mission| Makini Intergrated Developement Agency' })

})
module.exports = app;