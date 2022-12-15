const router = require('express').Router()
const db = require("../models")

const { Place, Comment, User } = db

router.post('/', async (req, res) => {
    if (req.currentUser?.role !== 'Property Owner') {
        return res.status(403).json({ message: 'You are not allowed to add a place' })
    }
    if (!req.body.name) {
        req.body.name = 'Property Name'
    }
    if (!req.body.address) {
        req.body.address = '1234'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'Anystate'
    }
    if (!req.body.footage) {
        req.body.footage = 'A Footage'
    }
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    const place = await Place.create(req.body)
    res.json(place)
})

router.get('/', async (req, res) => {
    if (!req.currentUser) {
        return res.status(404).json({ message: `You must be logged in to view places.` })
    } else {
    const places = await Place.findAll()
    res.json(places)
    }
})

router.get('/:placeId', async (req, res) => {
    if (!req.currentUser) {
        return res.status(404).json({ message: `You must be logged in to view a place.` })
    }
    let placeId = Number(req.params.placeId)
    if (isNaN(placeId)) {
        res.status(404).json({ message: `Invalid id "${placeId}"` })
    } else {
        const place = await Place.findOne({
            where: { placeId: placeId }
        })
        if (!place) {
            res.status(404).json({ message: `Could not find place with id "${placeId}"` })
        } else {
            res.json(place)
        }
    }
})

router.put('/:placeId', async (req, res) => {
    if (req.currentUser?.role !== 'Property Owner') {
        return res.status(403).json({ message: 'You are not allowed to add places' })
    }
    let placeId = Number(req.params.placeId)
    if (isNaN(placeId)) {
        res.status(404).json({ message: `Invalid id "${placeId}"` })
    } else {
        const place = await Place.findOne({
            where: { placeId: placeId },
        })
        if (!place) {
            res.status(404).json({ message: `Could not find place with id "${placeId}"` })
        } else {
            Object.assign(place, req.body)
            await place.save()
            res.json(place)
        }
    }
})

router.delete('/:placeId', async (req, res) => {
    if (req.currentUser?.role !== 'Property Owner') {
        return res.status(403).json({ message: 'You are not allowed to delete places' })
    }
    let placeId = Number(req.params.placeId)
    if (isNaN(placeId)) {
        res.status(404).json({ message: `Invalid id "${placeId}"` })
    } else {
        const place = await Place.findOne({
            where: {
                placeId: placeId
            }
        })
        if (!place) {
            res.status(404).json({ message: `Could not find place with id "${placeId}"` })
        } else {
            await place.destroy()
            res.json(place)
        }
    }
})


module.exports = router;