




import express from 'express'
const app = express();
import http from "http"
import {Server} from "socket.io"
import cors from "cors"
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config.js"

app.use(cors());
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
    adapter: createAdapter(redis)
});

io.on("connection", (socket)=> {
    socket.on("join", async (data) => {
        try {
         socket.emit("join_success")
        } catch (error) {
          console.log("The kafka produce error is", error);
        }
      });
})

server.listen(PORT, () => {
    console.log(`server run port: ${PORT}`);
});