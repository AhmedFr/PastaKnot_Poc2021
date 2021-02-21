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

    server.get("/login", async function (req: Request, res: Response) {
        console.log('request was received')
        var user: object | number;
 /*       if (!Object(req.body).length) {
            res.status(400);
            res.send("Bad req");*/
 //       } else {
            user = await createClient(req.body.username, req.body.password, connect);
            if (user === 401) {
                user = await findClientByName(req.body.username, req.body.password, connect);
            }
            console.log("user was logged/created")
            if (typeof user == 'object') {
                res.status(200).send(user);
            } else {
                res.sendStatus(user);
//            }
        }
    });

    /*
    server.get("/home", async function(req: Request, res: Response) {
      var categoryArray:Category[];
      categoryArray = await getCategories();
      res.sendStatus(200).send(categoryArray);
      });
      */


    server.post("/createTip/:category", async function (req: Request, res: Response) {
        var tip: Tips = {
            idClient: req.body.idClient,
            date: new Date,
            category: req.params.category,
            title: req.body.title,
            content: req.body.content,
            likes: 0
        };
    console.log(tip)
        try {
            const newTip = await createTip(tip, connect);
            res.status(200).send(newTip);
        } catch(e) {
        console.log(e)
            res.status(500).send(e)
        }
    });

    server.post("/createComment", async function (req: Request, res: Response) {
        var comment: Comment = {
            idClient: req.body.idClient, date: new Date, content: req.body.content, idTip: req.body.idTip
        };
        await createComment(comment, connect);
        res.status(200).send(comment);
    });

    server.get("/categories/:category", async function (req: Request, res: Response) {
        var tipsArray: object[];
        tipsArray = await getAllTips(req.params.category, connect);
        res.status(200).send(tipsArray);
    });

    server.get("/categories/:category/tip", async function (req: Request, res: Response) {
        var commentArray: object[] | number;
        commentArray = await getAllComments(req.body.idTip, connect);
        res.status(200).send(commentArray);
    });
    console.log("Server is ready")
    server.listen(8080);
}

main()