import { handleMessages } from "./messageHandler";
import { initializeTabs } from "./tabManager";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Donda extension installed.");
});

chrome.runtime.onStartup.addListener(() => {
  initializeTabs();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessages(message, sender, sendResponse);
  return true; // Indicate async response if needed
});
