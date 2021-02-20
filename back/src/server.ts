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
    if (await createClient(req.body.username, req.body.password) == 400) {
        user = await findClientByName(req.body.username, req.body.password);
    }
    if (typeof user == 'object') {
      sendUser(user);
      res.status(200);
    } else {
      res.sendStatus(user);
    }
  }
});

server.get("/Pastaknot/home", async function(req: Request, res: Response) {
  var categoryArray:Category[];
  categoryArray = await getCategories();
  dispCategories(categoryArray);
  });

server.post("/Pastaknot/:category/createTip", async function(req: Request, res: Response) {
  var tips: Tips;
  tips.idClient = req.body.idClient;
  tips.date = new Date;
  tips.title = req.body.title;
  tips.category = req.params.category;
  tips.content = req.body.content;
  await createTip(tips);
  sendtips(tips);
  res.status(200);
});

server.post("/Pastaknot/:category/:tip/createComment", async function(req: Request, res: Response) {
  var comment: Comment;
  comment.idClient = req.body.idClient;
  comment.date = new Date;
  comment.content = req.body.content;
  await createComment(comment);
  dispComment(comment);
  res.status(200);
});

server.get("/Pastaknot/:category", async function(req: Request, res: Response) {
  var tipsArray:object[];
  tipsArray = await getAllTips(req.params.category);
  dispTipsArray(tipsArray);
  res.status(200);
});

server.get("/Pastaknot/:category/:tips", async function(req: Request, res: Response) {
  var tips:any ;
  var commentArray:object[] | number;
  tips = await findTipByTitle(req.params.tips);
  commentArray = await getAllComments(tips.id);
  dispTips(tips);
  dispCommentArray(commentArray);
});

server.listen(8080);