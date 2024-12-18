import { io, Socket } from "socket.io-client";
let socket: Socket;
export const getSocket = (host: string) => {
  if (!socket) {
    socket = io(host, { autoConnect: false });
  }
  return socket;
};
