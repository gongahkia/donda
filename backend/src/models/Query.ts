import prisma from "../config/database";

export interface QueryModel {
  id: string;
  text: string;
  userId: string;
  website: string;
  responses: any;
  createdAt: Date;
}

export const Query = {
  async create(data: Omit<QueryModel, "id" | "createdAt">) {
    return prisma.query.create({
      data,
    });
  },

  async findByUserId(userId: string) {
    return prisma.query.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
};
