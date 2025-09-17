import { Server, Socket } from "socket.io";
import { logInfo } from "../utils/logger";

export function initGuidanceSocket(io: Server) {
  io.on("connection", (socket: Socket) => {
    logInfo(`Socket connected: ${socket.id}`);

    socket.on("join-session", (sessionId: string) => {
      socket.join(sessionId);
      socket.emit("joined-session", sessionId);
    });

    socket.on("cursor-move", (data: any) => {
      // Broadcast cursor movement to others in session room
      socket.to(data.sessionId).emit("cursor-update", data);
    });

    socket.on("disconnect", () => {
      logInfo(`Socket disconnected: ${socket.id}`);
    });
  });
}
