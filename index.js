require ('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port= process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/assets', express.static(__dirname + '/public'));
app.use(require('./router/router'));
app.use(require('./router/contacto'));
// Setting Handlebars
app.set('view engine', 'hbs')
// SETTINGS:
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + "/views/partials");
// Contenido estatíco
    // app.use(express.static('public'));

    // app.get("/", (req, res) => {
    //     res.render('index')
    // })

    // app.get("/home", (req, res) => {
    //     res.render('home')
    // })

    // app.get("/about", (req, res) => {
    //     res.render('about')
    // })

    // app.get("/portfolio", (req, res) => {
    //     res.render('portfolio')
    // })

    // app.get("/contact", (req, res) => {
    //     res.render('contact')
    // })
    app.listen(port, () =>{
        console.log(`Port is running in: ${port}`)
    })
