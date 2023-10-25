import { WebSocket } from "ws";


export function startWS(port: number) {
  wss = new WebSocket({ port });

  wss.on("connection", (ws, req) => {
    console.log("Connection opened: " + req.socket.address);
  });
}
