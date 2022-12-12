// Modules and Globals
<<<<<<< HEAD
require('dotenv').config()
const express = require('express')
const router = express.Router();
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const pool = require('./config/config.js');

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
require('dotenv').config();

// serve static frontend in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public', 'build')));
}

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))
app.use('/api/properties', require('./controllers/properties'))
app.use('/api/users', require('./controllers/users'))

// Routes



// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
=======
const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();



// Express Settings
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();

//Controllers and routes
const propertyController = require('./controllers/properties')
app.use('/properties', propertyController)

app.get('/', (req, res) => {
    res.render('PropertyIndex')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
>>>>>>> 63e1a51ebc4fa86ded8d0ce6061b611e2f062fda
