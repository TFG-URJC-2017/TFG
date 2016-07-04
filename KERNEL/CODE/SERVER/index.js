/*var server = require("./server.js");
server.start();*/


// importar
var express = require('express');

// instanciar
var app = express();
app.use(express.cookieParser());
app.use(express.session({secret: 'abcd1234'}));
// ruteo
//
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/eror.html');
});

app.get('/ejemplo', function(req, res){
   if(req.session.nombre){
      res.send('Hola ' + req.session.nombre);
   }else{
      var nombre = 'Tito';
      req.session.nombre = nombre;
      res.send('Hola usuario desconocido. De ahora en adelante te llamaremos ' + nombre);
   }
});

// escuchar
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
