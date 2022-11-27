import express, { Express, Request, Response, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import rootRouter from "../routes";

const server: Express = express();
server.use(cors());
server.use(helmet());

// import ruter root


server.use("/api", rootRouter);

server.get("/", (req: Request, res: Response) => {
  res.redirect('/api')
});

server.use(urlencoded({extended: true, limit: "50mb"}))
server.use(express.json({limit: "50mb"}))

export default server