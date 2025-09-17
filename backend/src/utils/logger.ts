export function logInfo(message: string) {
  console.info(new Date().toISOString(), "INFO:", message);
}

export function logError(message: string) {
  console.error(new Date().toISOString(), "ERROR:", message);
}
