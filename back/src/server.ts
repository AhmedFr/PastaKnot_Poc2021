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

async function main() {
    const connect = await dbInitialize();

    server.get("/Pastaknot/login", async function (req: Request, res: Response) {
        var user: object | number;
        if (!Object(req.body).length) {
            res.status(400);
            res.send("Bad req");
        } else {
            user = await createClient(req.body.username, req.body.password, connect);
            if (user === 400) {
                user = await findClientByName(req.body.username, req.body.password, connect);
            }
            if (typeof user == 'object') {
                res.sendStatus(200).send(user);
            } else {
                res.sendStatus(user);
            }
        }
    });

    /*
    server.get("/Pastaknot/home", async function(req: Request, res: Response) {
      var categoryArray:Category[];
      categoryArray = await getCategories();
      res.sendStatus(200).send(categoryArray);
      });
      */


    server.post("/Pastaknot/:category/createTip", async function (req: Request, res: Response) {
        var tip: Tips = {
            idClient: req.body.idClient,
            date: new Date,
            category: req.params.category,
            title: req.body.title,
            content: req.body.content,
            likes: 0
        };

        await createTip(tip, connect);
        res.status(200).send(tip);
    });

    server.post("/Pastaknot/:category/:tip/createComment", async function (req: Request, res: Response) {
        var comment: Comment = {
            idClient: req.body.idClient, date: new Date, content: req.body.content, idTip: req.body.idTip
        };
        await createComment(comment, connect);
        res.status(200).send(comment);
    });

    server.get("/Pastaknot/:category", async function (req: Request, res: Response) {
        var tipsArray: object[];
        tipsArray = await getAllTips(req.params.category, connect);
        res.status(200).send(tipsArray);
    });

    server.get("/Pastaknot/:category/:tips", async function (req: Request, res: Response) {
        var tips: any;
        var commentArray: object[] | number;
        tips = await findTipByTitle(req.params.tips, connect);
        commentArray = await getAllComments(tips.id, connect);
        res.status(200).send(tips).send(commentArray);
    });
    console.log("Server is ready")
    server.listen(8080);
}

main()