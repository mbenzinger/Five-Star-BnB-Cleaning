const express=require('express')
const router = require('express').Router()
const app = express();

router.get('/', (req, res) => {
    res.send('GET /properties')
})

module.exports = router;