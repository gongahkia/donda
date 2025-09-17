export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function isNonEmptyString(value: string): boolean {
  return typeof value === "string" && value.trim().length > 0;
}
