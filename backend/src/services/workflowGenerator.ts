import { callOpenAI } from "./llmService";

export async function generateWorkflowFromQuery(query: string): Promise<any> {
  const prompt = `Generate a multi-step workflow based on this user query: "${query}". Provide steps in JSON format.`;

  const result = await callOpenAI(prompt);

  try {
    return JSON.parse(result);
  } catch {
    return { error: "Invalid workflow format from LLM" };
  }
}
