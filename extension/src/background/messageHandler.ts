export function handleMessages(
  message: any,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
) {
  console.log("Message received in background:", message);

  if (message.type === "QUERY") {
    // Process query or forward to background service logic
    sendResponse({ result: "Query received: " + message.payload });
  } else if (message.type === "PING") {
    sendResponse({ pong: true });
  } else {
    sendResponse({ error: "Unknown message type" });
  }
}
