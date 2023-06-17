var express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({title:'Api 1 '})
})

module.exports = app;