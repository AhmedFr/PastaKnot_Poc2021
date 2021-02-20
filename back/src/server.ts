import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from  'body-parser'
import promise from "pg-promise"
import pgp from "pg-promise"
//import donnée_db from 'database'

var db = pgp("postgres://username:password@host:port/database");
var server = express();
server.use(bodyParser.json())
server.use(cookieParser());


server.get("/Pastaknot/home", function(request, response) {
  // get si il est connecter, les catégories, nb de tips? de la database
});

server.get("/Pastaknot/50nuancedepasta", function(request, response) {
  // get si il est connecter, les tips, nb de like, nb de comment de la db
});
server.post("/Pastaknot/50nuancedepasta", function(request, response) {
  if (!Object(request.body).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    //mettre dans la db en fonction du type de la requête (comment ou tip)
  }
});

server.get("/Pastaknot/lesPlatsduRadin", function(request, response) {
  // get si il est connecter, les tips, nb de like, nb de comment de la db
});

server.post("/Pastaknot/lesPlatsduRadin", function(request, response) {
  if (!Object(request.body).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    //mettre dans la db en fonction du type de la requête (comment ou tip)
  }
});

server.get("/Pastaknot/antiBidesaBiere", function(request, response) {
  // get si il est connecter, les tips, nb de like, nb de comment de la db
});

server.post("/Pastaknot/antibidesaBiere", function(request, response) {
  if (!Object(request.body).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    //mettre dans la db en fonction du type de la requête (comment ou tip)
  }
});

server.get("/Pastaknot/raptaQuirhallas", function(request, response) {
  // get si il est connecter, les tips, nb de like, nb de comment de la db

});

server.post("/Pastaknot/raptaQuirhallas", function(request, response) {
  if (!Object(request.body).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    //mettre dans la db en fonction du type de la requête (comment ou tip)
  }
});

server.get("/Pastaknot/login", function(request, response) {
  if (!Object(request.body).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    //comparer le resultat du body password + body username avec la data base
    //si c'est vrai, le connecter.
    //si c'est faux status 400 et message "mauvais mdp ou username"
  }
});

server.post("/Pastaknot/register", function(request, response) {
  if (!Object(request.body).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    db.
    //new in database with request.body.password and request.body.username
  }
});

server.listen(8080);