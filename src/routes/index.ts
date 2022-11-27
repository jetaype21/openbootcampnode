
import express , { Express, Request, Response } from "express";
import goodByeRouter from "./goodByeRouter";

let server: Express = express()
let rootRouter  = express.Router()

// local get 
rootRouter.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to my app`);
});

server.use('/', rootRouter)
server.use('/goodbye', goodByeRouter)

export default server