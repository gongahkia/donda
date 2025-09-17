import prisma from "../config/database";

export interface UserModel {
  id: string;
  email: string;
  createdAt: Date;
  preferences?: any;
}

export const User = {
  async create(email: string) {
    return prisma.user.create({
      data: { email },
    });
  },

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },
};
