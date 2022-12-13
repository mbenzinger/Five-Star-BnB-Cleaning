// Modules and Globals
const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override')

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();
app.use(methodOverride('_method'))

//Controllers and routes
const propertyController = require('./controllers/properties')
app.use('/properties', propertyController)

app.get('/', (req, res) => {
    res.render('propertyIndex')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})





