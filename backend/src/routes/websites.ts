import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { websiteController } from "../controllers/websiteController";

export const websitesRouter = Router();

websitesRouter.use(authMiddleware);

websitesRouter.get("/analyze", websiteController.analyzeWebsite);
