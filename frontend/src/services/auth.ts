import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/login`,
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}

export async function register(email: string, password: string) {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/register`,
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    return null;
  }
}

export async function getUserFromToken() {
  // Optionally implement token check to get user info
  return null;
}
