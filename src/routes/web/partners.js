var express = require('express');
const app = express();
// view engine setup

app.get('/', (req, res,next) => {
    res.render("about/partners/index.ejs", { title: 'Partners | Makini Intergrated Developement Agency' })

})
app.get('/:id', (req, res,next) => {
    res.render("about/partners/index.ejs", { title: 'Partners | Makini Intergrated Developement Agency' })

})
module.exports = app;   