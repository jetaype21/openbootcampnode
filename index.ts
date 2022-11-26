import express, { Request, response, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

let puerto = process.env.PUERTO || 8000;

// Routes of the app
app.get("/", (req: Request, res: Response) => {
  res.json({data: {
    message: "good bay, world"
  }});
});

app.get("/hello/:name", (req: Request, res: Response) => {
  res.json({data: {
    message: `hello ${req.params.name || "anonimo"}`
  }});
});

// Listen app
app.listen(puerto, () => {
  console.log(`the app listen from port: http://loaclhost:${puerto}`);
});
