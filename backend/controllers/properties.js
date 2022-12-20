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
        req.body.pic = "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    properties.push(req.body)
    res.redirect('/properties')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!properties[id]) {
      res.render('error404')
    }
    else {
    res.render('properties/show', { property: properties[id], id})
    }
  })

  router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!properties[id]) {
      res.render('error404')
    }
    else {
      properties.splice(id, 1)
      res.redirect('/properties')
    }
  })


  router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!properties[id]) {
        res.render('error404')
    }
    else {
      res.render('properties/edit', { property: properties[id] })
    }
  })

  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!properties[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into properties[id]
        properties[id] = req.body
        res.redirect(`/properties/${id}`)
    }
  })
  
  
  

module.exports = router