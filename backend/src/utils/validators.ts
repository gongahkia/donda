export function isValidEmail(email: string): boolean {
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
  return emailRegex.test(email);
}

export function isNonEmptyString(str: string): boolean {
  return typeof str === "string" && str.trim().length > 0;
}
