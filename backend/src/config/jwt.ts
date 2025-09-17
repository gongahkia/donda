import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export function signJwt(payload: object, options?: jwt.SignOptions) {
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyJwt<T>(token: string): T | null {
  try {
    return jwt.verify(token, JWT_SECRET) as T;
  } catch {
    return null;
  }
}
