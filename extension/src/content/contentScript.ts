// Injected script to manipulate DOM and provide cursor guidance

console.log("Donda contentScript injected.");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GUIDANCE") {
    // Example: Highlight element or move cursor visualization
    const selector = message.payload.selector;
    const element = document.querySelector(selector);
    if (element) {
      element.style.outline = "3px solid red";
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: "Element not found" });
    }
  }
});
