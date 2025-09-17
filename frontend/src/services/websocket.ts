import { io, Socket } from "socket.io-client";

const WS_URL = import.meta.env.VITE_WS_URL || "ws://localhost:5000";

export const socket: Socket = io(WS_URL, {
  autoConnect: false,
});

export function connectSocket() {
  if (!socket.connected) {
    socket.connect();
  }
}

export function disconnectSocket() {
  if (socket.connected) {
    socket.disconnect();
  }
}
