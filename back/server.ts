import express, { request } from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from  'body-parser'

var server = express();

server.get("/Pastaknot/home", function(request, response) {

});

server.get("Pastaknot/50nuancedepate", function(request, response) {

});

server.get("Pastaknot/burger", function(request, response) {

});

server.get("Pastaknot/pizza", function(request, response) {

});

server.get("Pastaknot/patisserie", function(request, response) {

});

server.get("Pastaknot/tacos", function(request, response) {

});

server.get("Pastaknot/login", function(request, response) {

});

server.listen(8080);