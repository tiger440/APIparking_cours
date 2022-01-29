const express = require('express')
const app = express()
const parkings = require('./parkings.json')
const reservations = require('./reservations.json')

// Middleware
app.use(express.json())


//PARKING
app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

//RESERVATION
app.get('/parkings/:id/reservations', (req,res) => {
    const id = parseInt(req.params.id)
    const reservation = reservations.filter(reservation => reservation.parkingId === id)
    res.status(200).json(reservation)
})

app.post('/parkings/:id/reservations', (req,res) => {
    reservations.push(req.body)
    res.status(200).json(reservations)
})

app.listen(8080, () => {
    console.log(`Serveur à l'écoute`)
})