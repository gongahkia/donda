// This module can handle smooth cursor animations in the page

let cursorElement: HTMLElement | null = null;

export function createCursor() {
  if (cursorElement) return;

  cursorElement = document.createElement("div");
  cursorElement.style.position = "fixed";
  cursorElement.style.width = "20px";
  cursorElement.style.height = "20px";
  cursorElement.style.border = "2px solid black";
  cursorElement.style.borderRadius = "10px";
  cursorElement.style.pointerEvents = "none";
  cursorElement.style.zIndex = "999999";
  cursorElement.style.transition = "transform 0.3s ease";

  document.body.appendChild(cursorElement);
}

export function moveCursorTo(x: number, y: number) {
  if (!cursorElement) createCursor();
  if (cursorElement) {
    cursorElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

export function removeCursor() {
  if (cursorElement) {
    document.body.removeChild(cursorElement);
    cursorElement = null;
  }
}
