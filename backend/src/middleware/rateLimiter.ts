import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 1000 * 60, // 1 minute
  max: 60, // Limit each IP to 60 requests per windowMs
  message: {
    message: "Too many requests, please try again later."
  }
});
