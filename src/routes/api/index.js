
var express = require('express');
const v1Routes=require('./v1/index')
const v2Routes=require('./v2/index')
const app = express();
app.get('/', (req, res) => {
    res.json({ title: 'Api ' })
})
app.use('/v1',v1Routes)
app.use('/v2', v2Routes)
module.exports = app;