import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthenticatedRequest } from "../middleware/auth";

const prisma = new PrismaClient();

export const workflowController = {
  async createWorkflow(req: AuthenticatedRequest, res: Response) {
    try {
      const { name, steps, website } = req.body;
      const userId = req.user?.userId;

      if (!name || !steps || !website) {
        return res.status(400).json({ error: "Name, steps, and website are required" });
      }

      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }

      const workflow = await prisma.workflow.create({
        data: {
          name,
          steps,
          website,
          userId
        }
      });

      res.status(201).json(workflow);
    } catch (error) {
      console.error("Workflow creation error:", error);
      res.status(500).json({ error: "Failed to create workflow" });
    }
  },

  async getWorkflows(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.userId;

      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }

      const workflows = await prisma.workflow.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" }
      });

      res.json(workflows);
    } catch (error) {
      console.error("Get workflows error:", error);
      res.status(500).json({ error: "Failed to fetch workflows" });
    }
  },

  async updateWorkflow(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.params;
      const { name, steps } = req.body;
      const userId = req.user?.userId;

      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }

      const workflow = await prisma.workflow.findFirst({
        where: { id, userId }
      });

      if (!workflow) {
        return res.status(404).json({ error: "Workflow not found" });
      }

      const updatedWorkflow = await prisma.workflow.update({
        where: { id },
        data: { name, steps }
      });

      res.json(updatedWorkflow);
    } catch (error) {
      console.error("Workflow update error:", error);
      res.status(500).json({ error: "Failed to update workflow" });
    }
  },

  async deleteWorkflow(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }

      const workflow = await prisma.workflow.findFirst({
        where: { id, userId }
      });

      if (!workflow) {
        return res.status(404).json({ error: "Workflow not found" });
      }

      await prisma.workflow.delete({
        where: { id }
      });

      res.status(204).send();
    } catch (error) {
      console.error("Workflow deletion error:", error);
      res.status(500).json({ error: "Failed to delete workflow" });
    }
  }
};