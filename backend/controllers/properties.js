const router = require('express').Router()
const db = require("../models")

const { Property } = db

router.post('/', async (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    const property = await Property.create(req.body)
    res.json(property)
})


router.get('/', async (req, res) => {
    const propertys = await Property.findAll()
    res.json(propertys)
})


router.get('/:propertyId', async (req, res) => {
    let propertyId = Number(req.params.propertyId)
    if (isNaN(propertyId)) {
        res.status(404).json({ message: `Invalid id "${propertyId}"` })
    } else {
        const property = await Property.findOne({
            where: { propertyId: propertyId },
        })
        if (!property) {
            res.status(404).json({ message: `Could not find property with id "${propertyId}"` })
        } else {
            res.json(property)
        }
    }
})

router.put('/:propertyId', async (req, res) => {
    let propertyId = Number(req.params.propertyId)
    if (isNaN(propertyId)) {
        res.status(404).json({ message: `Invalid id "${propertyId}"` })
    } else {
        const property = await Property.findOne({
            where: { propertyId: propertyId },
        })
        if (!property) {
            res.status(404).json({ message: `Could not find property with id "${propertyId}"` })
        } else {
            Object.assign(property, req.body)
            await property.save()
            res.json(property)
        }
    }
})

router.delete('/:propertyId', async (req, res) => {
    let propertyId = Number(req.params.propertyId)
    if (isNaN(propertyId)) {
        res.status(404).json({ message: `Invalid id "${propertyId}"` })
    } else {
        const property = await Property.findOne({
            where: {
                propertyId: propertyId
            }
        })
        if (!property) {
            res.status(404).json({ message: `Could not find property with id "${propertyId}"` })
        } else {
            await property.destroy()
            res.json(property)
        }
    }
})

module.exports = router

