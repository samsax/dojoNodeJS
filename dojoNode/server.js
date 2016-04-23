var http = require("http");
var modulo = require("./modulo");
var _suma = modulo.suma(5,6);
http.createServer(function (request,response){
	response.write("hola"+_suma);
	console.log("...............");
	response.end();
}).listen(8888) 