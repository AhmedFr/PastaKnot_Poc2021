import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from  'body-parser'
import { Clients, Tips} from './types'
//import donnée_db from 'database'

var server = express();
server.use(bodyParser.json())
server.use(cookieParser());


server.get("/Pastaknot/login", function(request, response) {
  var user: Clients;
  if (!Object(request.body).length) {
    response.status(400);
    response.send("Bad request");
  }
  else {
    if (find_client(request.body.username, request.body.password) == 404) {
      user = create_client(request.body.username, request.body.password);
    } else {
      user = find_client(request.body.username, request.body.password);
    }
    sendUser(user);
    response.status(200);
    //comparer le resultat du body password + body username avec la data base
    //si c'est vrai, le connecter.
    //si c'est faux status 400 et message "mauvais mdp ou username"
  }
});

server.get("/Pastaknot/home", function(request, response) {
  var categoryArray[]: Category;
  categoryArray = getCategories();
  dispCategories(categoryArray);
  });

server.post("/Pastaknot/:category/createTips", function(request, response) {
  var
    // get si il est connecter, les tips, nb de like, nb de comment de la db
});
  // get si il est connecter, les catégories, nb de tips? de la database

server.get("/Pastaknot/:category", function(request, response) {
  // get si il est connecter, les tips, nb de like, nb de comment de la db
});
server.get("/Pastaknot/:category/:tips", function(request, response) {
  // get si il est connecter, les tips, nb de like, nb de comment de la db
});

server.listen(8080);