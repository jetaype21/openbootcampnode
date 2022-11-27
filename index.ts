import server from "./src/server";
import dotenv from "dotenv";

dotenv.config();
let puerto = process.env.PUERTO || 8000;

// Listen app
server.listen(puerto, () => {
  console.log(`the server listen from port: http://loaclhost:${puerto}`);
});

server.on("error", (error) => {
  console.log(`fail connection to port: http://loaclhost:${puerto}`);
});
