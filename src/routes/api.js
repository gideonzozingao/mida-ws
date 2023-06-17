
var express = require('express');
var router = express.Router();
const v1Routes=require('./api/v1/index')
const v2Routes=require('./api/v2/index')
// const app = express();
router.get('/', (req, res) => {
    res.json({ title: 'Api ' })
})
router.use('/v1',v1Routes)
router.use('/v2', v2Routes)
module.exports = router;