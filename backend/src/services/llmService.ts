import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

export async function callOpenAI(prompt: string): Promise<string> {
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const headers = {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  };

  const data = {
    model:"gpt-4",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1000,
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("LLM service failed");
  }
}
