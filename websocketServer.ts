import { WebSocketServer } from "ws";

export let wss: WebSocketServer;

export function startWSS(port: number) {
  wss = new WebSocketServer({ port });

  wss.on("connection", (ws, req) => {
    console.log("Connection opened: " + req.socket.address);
  });
}
