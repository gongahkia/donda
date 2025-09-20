import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { analyzeWebsite } from "../services/websiteAnalyzer";

const prisma = new PrismaClient();

export const websiteController = {
  async analyzeWebsite(req: Request, res: Response) {
    try {
      const { domain } = req.body;

      if (!domain) {
        return res.status(400).json({ error: "Domain is required" });
      }

      let website = await prisma.website.findUnique({
        where: { domain }
      });

      if (!website) {
        const metadata = await analyzeWebsite(domain);
        website = await prisma.website.create({
          data: {
            domain,
            metadata
          }
        });
      }

      res.json(website);
    } catch (error) {
      console.error("Website analysis error:", error);
      res.status(500).json({ error: "Failed to analyze website" });
    }
  },

  async getWebsite(req: Request, res: Response) {
    try {
      const { domain } = req.params;

      const website = await prisma.website.findUnique({
        where: { domain }
      });

      if (!website) {
        return res.status(404).json({ error: "Website not found" });
      }

      res.json(website);
    } catch (error) {
      console.error("Get website error:", error);
      res.status(500).json({ error: "Failed to fetch website" });
    }
  }
};