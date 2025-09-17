// Stub: Analyze current page DOM or metadata

export function analyzePage() {
  return {
    title: document.title,
    url: window.location.href,
    links: Array.from(document.links).map((link) => link.href),
  };
}
