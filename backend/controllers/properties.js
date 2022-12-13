const router = require('express').Router()

router.get('/', (req, res) => {
    let properties = [{
        name: 'Wades House',
        city: 'Milwaukee',
        state: 'WI',
        squarefootage: '2000',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Davids Mansion',
        city: 'Phoenix',
        state: 'AZ',
        squarefootage: '5000',
        pic: 'http://placekitten.com/250/250'
      }]  
    res.render('properties/index', { properties })
})

router.get('/new', (req, res) => {
    res.render('properties/addProperty')
})

router.post('/', (req,res) => {
    console.log(req.body)
    res.send('POST/properties')
})

module.exports = router



