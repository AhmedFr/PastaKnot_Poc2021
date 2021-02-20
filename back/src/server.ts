import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from  'body-parser'
import { dbInitialize } from './appDatabase'
import { Clients, Tips, Category, Comment } from './types'
import { createComment, getAllComments } from './models/commentModels';
import { createClient, findClientByName } from './models/clientModels';
import { createTip, getAllTips, findTipByTitle } from './models/tipModels';

var server = express();
server.use(bodyParser.json())
server.use(cookieParser());
export const connect = dbInitialize();

server.get("/Pastaknot/login", async function(req: Request, res: Response) {
  var user: object | number;
  if (!Object(req.body).length) {
    res.status(400);
    res.send("Bad req");
  }
  else {
    user = await createClient(req.body.username, req.body.password);
    if (user === 400) {
        user = await findClientByName(req.body.username, req.body.password);
    }
    if (typeof user == 'object') {
      res.sendStatus(200).send(user);
    } else {
      res.sendStatus(user);
    }
  }
});

server.get("/Pastaknot/home", async function(req: Request, res: Response) {
  var categoryArray:Category[];
  categoryArray = await getCategories();
  res.sendStatus(200).send(categoryArray);
  });

server.post("/Pastaknot/:category/createTip", async function(req: Request, res: Response) {
  var tip: Tips;
  tip.idClient = req.body.idClient;
  tip.date = new Date;
  tip.title = req.body.title;
  tip.category = req.params.category;
  tip.content = req.body.content;
  await createTip(tip);
  res.status(200).send(tip);
});

server.post("/Pastaknot/:category/:tip/createComment", async function(req: Request, res: Response) {
  var comment: Comment;
  comment.idClient = req.body.idClient;
  comment.date = new Date;
  comment.content = req.body.content;
  comment.idTip = req.body.idTip;
  await createComment(comment);
  res.status(200).send(comment);
});

server.get("/Pastaknot/:category", async function(req: Request, res: Response) {
  var tipsArray:object[];
  tipsArray = await getAllTips(req.params.category);
  res.status(200).send(tipsArray);
});

server.get("/Pastaknot/:category/:tips", async function(req: Request, res: Response) {
  var tips:any ;
  var commentArray:object[] | number;
  tips = await findTipByTitle(req.params.tips);
  commentArray = await getAllComments(tips.id);
  res.status(200).send(tips).send(commentArray);
});

server.listen(8080);