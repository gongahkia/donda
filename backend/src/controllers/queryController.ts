import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { callOpenAI } from "../services/llmService";
import { AuthenticatedRequest } from "../middleware/auth";

const prisma = new PrismaClient();

export const queryController = {
  async createQuery(req: AuthenticatedRequest, res: Response) {
    try {
      const { text, website } = req.body;
      const userId = req.user?.userId;

      if (!text || !website) {
        return res.status(400).json({ error: "Text and website are required" });
      }

      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }

      const llmResponse = await callOpenAI(
        `Help the user navigate this website: ${website}. User query: ${text}`
      );

      const query = await prisma.query.create({
        data: {
          text,
          website,
          userId,
          responses: {
            llm: llmResponse,
            timestamp: new Date().toISOString()
          }
        }
      });

      res.status(201).json(query);
    } catch (error) {
      console.error("Query creation error:", error);
      res.status(500).json({ error: "Failed to create query" });
    }
  },

  async getQueries(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.user?.userId;

      if (!userId) {
        return res.status(401).json({ error: "User not authenticated" });
      }

      const queries = await prisma.query.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 50
      });

      res.json(queries);
    } catch (error) {
      console.error("Get queries error:", error);
      res.status(500).json({ error: "Failed to fetch queries" });
    }
  }
};