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
    res.render('properties/edit', { property: properties [id] })
    }
  })
  
  

module.exports = router


  

