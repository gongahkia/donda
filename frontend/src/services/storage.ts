export function saveToStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item) as T;
  } catch {
    return null;
  }
}
