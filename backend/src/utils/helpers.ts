export function safeParseJson<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
