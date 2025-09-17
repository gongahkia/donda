import React, { useState, useEffect } from "react";

const Options: React.FC = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    chrome.storage.sync.get(["openaiApiKey"], (result) => {
      if (result.openaiApiKey) setApiKey(result.openaiApiKey);
    });
  }, []);

  const saveApiKey = () => {
    chrome.storage.sync.set({ openaiApiKey: apiKey }, () => {
      alert("API Key saved.");
    });
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px", fontFamily: "Arial" }}>
      <h2>Extension Options</h2>
      <label htmlFor="apiKey">OpenAI API Key:</label>
      <input
        id="apiKey"
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        style={{ width: "100%", margin: "0.5rem 0" }}
      />
      <button onClick={saveApiKey}>Save</button>
    </div>
  );
};

export default Options;
