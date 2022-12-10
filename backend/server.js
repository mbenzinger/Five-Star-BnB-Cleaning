// Modules and Globals
const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const pool = require('./config/config.js');

// Express Settings
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config();

//Controllers
const propertyController = require('./controllers/places')
app.use('/places', propertyController)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
