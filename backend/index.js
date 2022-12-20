import fs from 'fs';
import path from 'path';
import React from 'react';
import { ReactDOMServer } from 'react-dom/server';
import App from '../frontend/src/App';

// Modules and Globals
const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override')
const router = express.Router();

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

app.use('^/$', (req, res, next) => {
fs.readFile(path.resolve('../frontend/build/index.html'), 'utf-8', (err, data) => {
    if(err){
        console.log(err)
        return res.status(500).send("Some error happend")
    }
    return res.send(data.replace('<div id="root"></div>',
     `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
     )
    )
})
    //res.render('propertyIndex')
})

app.use(express.static(path.resolve(__dirname, '..', 'frontend/build')))

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})





