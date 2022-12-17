// Modules and Globals
const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override')
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();
app.use(methodOverride('_method'))

// serve static frontend in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public', 'build')));
}

//Controllers and routes
app.use(express.urlencoded({ extended: true }))
app.use('/api/users', require('./controllers/users'))
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





