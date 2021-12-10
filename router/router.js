const { Router } = require ('express');
const router = new Router();
const mysql = require ('mysql'); 

// CONEXION A BASE DE DATOS:
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'alexandra_martinez',
    password: ''
})

conn.connect((err) =>{
    if(err) throw err;
    console.log('Conexión establecida....')
})
router.get("/", (req, res) => {
        res.render('index')
    })

router.get("/home", (req, res) => {
        res.render('home')
    })
router.get("/about", (req, res) => {
        res.render('about')
    })
// SELECT:
router.get('/portfolio', (req, res) =>{
let sql ="SELECT * FROM desingfull";
let query = conn.query(sql, (err, results) =>{
    if(err) throw err;
    res.render('portfolio',{
        results: results
    });
});
});

// Insertar
router.post('/save', (req, res) => {
let data = { Nombre: req.body.Nombre, Edad: req.body.Edad, Profesion: req.body.Profesion };
let sql = "INSERT INTO desingfull SET ?";
let query = conn.query(sql, data, (err, results) => {
if (err) throw err;
res.redirect('/');
});
});

// Actualizar:
router.post('/update', (req, res) => {
let sql = "UPDATE desingfull SET Nombre='" + req.body.Nombre + "', Edad='" + req.body.Edad +  "', Profesion='" + req.body.Profesion + "' WHERE id_webdelevop=" + req.body.id;
let query = conn.query(sql, (err, results) => {
if (err) throw err;
    res.redirect('/');
});
});

// Delete:
router.post('/delete', (req, res) =>{
let sql = "DELETE FROM desingfull WHERE id_webdelevop = " + req.body.id_webdelevop + " ";
let query = conn.query(sql, (err, results) =>{
    if (err) throw err;
    res.redirect('/');
});
});

module.exports = router;