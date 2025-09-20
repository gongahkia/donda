import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { queryController } from "../controllers/queryController";

export const queriesRouter = Router();

queriesRouter.use(authMiddleware);

queriesRouter.post("/", queryController.createQuery);
queriesRouter.get("/", queryController.getQueries);
