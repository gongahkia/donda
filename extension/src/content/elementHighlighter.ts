export function highlightElementTemporarily(selector: string, duration = 3000) {
  const el = document.querySelector(selector);
  if (!el) return false;
  const originalOutline = el.style.outline;
  el.style.outline = "3px solid orange";
  setTimeout(() => {
    el.style.outline = originalOutline;
  }, duration);
  return true;
}
