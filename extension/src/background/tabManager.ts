export function initializeTabs() {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
      console.log("Tab loaded:", tab.url);
      // Inject or notify content scripts if necessary
    }
  });
}
