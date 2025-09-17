import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

export function useWebSocket(url: string) {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!url) return;

    socketRef.current = io(url);

    return () => {
      socketRef.current?.disconnect();
    };
  }, [url]);

  const emit = (event: string, data?: any) => {
    socketRef.current?.emit(event, data);
  };

  const on = (event: string, callback: (...args: any[]) => void) => {
    socketRef.current?.on(event, callback);
  };

  return { emit, on, socket: socketRef.current };
}
