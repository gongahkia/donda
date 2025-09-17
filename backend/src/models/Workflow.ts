import prisma from "../config/database";

export interface WorkflowModel {
  id: string;
  name: string;
  steps: any;
  website: string;
  userId: string;
  createdAt: Date;
}

export const Workflow = {
  async create(data: Omit<WorkflowModel, "id" | "createdAt">) {
    return prisma.workflow.create({ data });
  },

  async findByUserId(userId: string) {
    return prisma.workflow.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },

  async findById(id: string) {
    return prisma.workflow.findUnique({ where: { id } });
  },

  async update(id: string, data: Partial<WorkflowModel>) {
    return prisma.workflow.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.workflow.delete({ where: { id } });
  }
};
