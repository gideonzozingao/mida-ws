var express = require('express');
const app = express();
// view engine setup

app.get('/', (req, res,next) => {

    res.render("projects/index.ejs", { title: 'Projects | Makini Intergrated Developement Agency' })

})
app.get('/:id', (req, res,next) => {
    const project_id=req.params.id
    res.render("projects/index.ejs", { title: `Projects ${project_id} | Makini Intergrated Developement Agency`  })

})
module.exports = app;