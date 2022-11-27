import { GoodByeController } from "../controllers/GoodByeController";
import express, { Request, Response } from "express";

let goodByeRouter = express.Router();

goodByeRouter.route("/").get(async (req: Request, res: Response) => {
  let name: any = req?.query?.name;
  let date: string = `${new Date().toDateString()}`;

  const controller: GoodByeController = new GoodByeController();
  const response = await controller.getMessage(name, date);

  return res.send(response);
});

export default goodByeRouter;
