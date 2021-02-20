import express, { request } from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from  'body-parser'

var server = express();

server.get("/Pastaknot/home", function(request, response) {

});

server.get("Pastaknot/50nuancedepasta", function(request, response) {

});

server.get("Pastaknot/lesPlatsduRadin", function(request, response) {

});

server.get("Pastaknot/antiBidesaBiere", function(request, response) {

});

server.get("Pastaknot/raptaQuirhallas", function(request, response) {

});

server.get("Pastaknot/login", function(request, response) {

});

server.listen(8080);