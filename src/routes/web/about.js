var express = require('express');
const roadmaps=require('./roadmap')
const partners=require('./partners')
const vissionMission=require('./vission-mission');
const app = express();
// view engine setup
app.get('/', (req, res,next) => {
    res.render("about/index.ejs", { title: 'About | Makini Intergrated Developement Agency' })
})


app.get('/background', (req, res,next) => {
    res.render("about/background.ejs", { title: 'Background Info | Makini Intergrated Developement Agency' })

})

app.use('/roadmaps',roadmaps)
app.use('/partners', partners)
app.use('/vission-mission', vissionMission)







module.exports = app;