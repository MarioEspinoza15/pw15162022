let express = require('express');
let mysql = require('mysql');
let puerto = 3000;

var app = express();

app.listen(puerto, function(){
    console.log("Servidor en lìnea")
})
//Base de Datos
//Parametros de conexion
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pw1516'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conectado a la Base De Datos");
    }
});

//RUTAS
//Ruta de inicio - raiz
app.get('/', function(req,resp){
    resp.send('Ruta de inicio');
});

//Ruta a todos los articulos
app.get('/api/articulos', function(req,resp){
    conexion.query('SELECT * FROM Articulos', function(error,filas){
        if(error){
            throw error;
        }else{
            resp.send(filas);
        }
    })
});

//Ruta a un articulo
app.get('/api/articulos/:id', function(req,resp){
    conexion.query('SELECT * FROM Articulos WHERE id=?', [req.params.id], function(error,fila){
        if(error){
            throw error;
        }else{
            resp.send(fila);
        }
    })
});

//Ruta para agregar un articulo
app.post('/api/Articulos', function(req, resp){
    let data = {
        descipcion: req.body.descipcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
    };
    let sql = "INSERT INTO Articulos SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            resp.send(results);
        }
    })
});