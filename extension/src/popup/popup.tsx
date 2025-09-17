import React, { useState } from "react";

const Popup: React.FC = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const sendQuery = () => {
    chrome.runtime.sendMessage(
      { type: "QUERY", payload: query },
      (response) => {
        if (response?.result) {
          setStatus("Response: " + response.result);
        } else {
          setStatus("No response or error.");
        }
      }
    );
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "300px", fontFamily: "Arial" }}>
      <h2>Donda Assistant</h2>
      <input
        type="text"
        value={query}
        placeholder="Enter your query"
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <button onClick={sendQuery} disabled={!query.trim()}>
        Send
      </button>
      <div style={{ marginTop: "0.5rem", whiteSpace: "pre-wrap" }}>{status}</div>
    </div>
  );
};

export default Popup;
