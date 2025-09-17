import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function processQuery(query: string) {
  try {
    const response = await axios.post(
      `${API_URL}/api/queries/process`,
      { text: query },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("API processQuery error", error);
    return null;
  }
}

export async function getWorkflows() {
  try {
    const response = await axios.get(`${API_URL}/api/workflows`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("API getWorkflows error", error);
    return null;
  }
}

export async function saveWorkflow(workflow: any) {
  try {
    const response = await axios.post(`${API_URL}/api/workflows`, workflow, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("API saveWorkflow error", error);
    return null;
  }
}
