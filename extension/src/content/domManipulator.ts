export function highlightElement(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return false;
  el.style.outline = "3px solid blue";
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  return true;
}
