const router = require('express').Router()
const properties = require('../models/properties.js')

router.get('/', (req, res) => {
    
    res.render('properties/index', { properties })
})

router.get('/new', (req, res) => {
    res.render('properties/addProperty')
})

router.post('/', (req,res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = "http://placekitten.com/265/300"
    }
    properties.push(req.body)
    res.redirect('/properties')
})

module.exports = router



