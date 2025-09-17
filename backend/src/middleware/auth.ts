import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../config/jwt";

export interface AuthenticatedRequest extends Request {
  user?: { id: string; email: string };
}

export function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const payload = verifyJwt<{ id: string; email: string }>(token);

  if (!payload) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = payload;
  next();
}
