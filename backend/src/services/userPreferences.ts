import prisma from "../config/database";

export async function getUserPreferences(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user?.preferences || {};
}

export async function updateUserPreferences(userId: string, prefs: any) {
  return prisma.user.update({
    where: { id: userId },
    data: { preferences: prefs },
  });
}
