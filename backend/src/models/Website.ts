import prisma from "../config/database";

export interface WebsiteModel {
  id: string;
  domain: string;
  metadata?: any;
  createdAt: Date;
}

export const Website = {
  async findOrCreate(domain: string, metadata?: any) {
    const existing = await prisma.website.findUnique({ where: { domain } });
    if (existing) return existing;
    return prisma.website.create({
      data: { domain, metadata },
    });
  },

  async findByDomain(domain: string) {
    return prisma.website.findUnique({ where: { domain } });
  }
};
