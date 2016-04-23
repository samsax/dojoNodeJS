console.log('Inicio el servidor');
var express = require('express');
var app  = express();
var bodyParser = require("body-parser");
var pg = require("pg")

var URL = 'postgres://dvtvmeem:vogFpGXl04Dpa11CP-zCkhi10shYtR_9@pellefant.db.elephantsql.com:5432/dvtvmeem';

app.use(bodyParser.urlencoded({extended: true}));

var PUERTO = 3777;

app.listen(PUERTO, function(){
	console.log('Puerto: '+PUERTO);
});
app.get('/',function(req,res){
	res.send('Bienvenido');
});
 app.post('/postprueba',function(req,res){
 	res.send(req.body);
 	console.log(req.body);
});

var client = new pg.Client(URL);
client.connect(function(err){
	if(err)
	{
		return console.log("error en conexion");
	}console.log('Conectado');
	client.end();
});

app.post('/api/insertar', function(req, res){
    var cedula = req.body.cedula;
    var nombre = req.body.nombre;
    var dinero = req.body.dinero;
    console.log(req.body);
    var queryInsertar = 'INSERT INTO saldos VALUES('
                + cedula + ', '
                + '\'' + nombre + '\', '
                + dinero + ');'
    console.log(queryInsertar);
    
    pg.connect(URL, function(err, client, done){
        if (err){
            res.send('Error :(');
            return console.log('Error de conexión');
        }
        client.query(queryInsertar, function(err, result){
            if(err){
                res.send('Error :(');
                client.end();
                return console.log('Error en el query');
            }
            console.log('Se insertó');
            res.send('OK c:');
            client.end();
        });
    });
});

