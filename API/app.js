let express = require('express');
let mysql = require('mysql');
let puerto = 3000;

var app = express();

app.listen(puerto, function(){
    console.log("Servidor en lìnea")
})
