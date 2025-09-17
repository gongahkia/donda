import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { getUserFromToken } from "../services/auth";

export function useAuth() {
  const { user, setUser, clearUser } = useAuthStore();

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserFromToken();
      if (userData) setUser(userData);
      else clearUser();
    }
    fetchUser();
  }, [setUser, clearUser]);

  return { user, setUser, clearUser };
}
