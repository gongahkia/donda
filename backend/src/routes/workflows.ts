import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { workflowController } from "../controllers/workflowController";

export const workflowsRouter = Router();

workflowsRouter.use(authMiddleware);

workflowsRouter.get("/", workflowController.getWorkflows);
workflowsRouter.post("/", workflowController.createWorkflow);
workflowsRouter.put("/:id", workflowController.updateWorkflow);
workflowsRouter.delete("/:id", workflowController.deleteWorkflow);
