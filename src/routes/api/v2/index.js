var express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.json({ title: 'Api  version 2' })
})

module.exports = app;