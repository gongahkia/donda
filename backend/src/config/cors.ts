import cors from "cors";

const corsConfig = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
};

export default cors(corsConfig);
