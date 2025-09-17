export interface LlmResponse {
  choices: Array<{ text: string; index: number }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
