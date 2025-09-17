import React, { useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { useVoiceInput } from "../hooks/useVoiceInput";

const HomePage: React.FC = () => {
  const { queries, submitQuery } = useQuery();
  const { isListening, transcript, start, stop } = useVoiceInput();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    await submitQuery(input);
    setLoading(false);
    setInput("");
  };

  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Donda: Ask What You Want To Do</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="What do you want to do today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1.1rem",
            border: "1px solid black",
            borderRadius: "4px",
          }}
          disabled={loading}
          autoFocus
        />
        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: "0.75rem", padding: "0.5rem 1rem" }}
        >
          {loading ? "Loading..." : "Ask"}
        </button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={isListening ? stop : start}
          style={{ marginBottom: "1rem" }}
        >
          {isListening ? "Stop Voice Input" : "Start Voice Input"}
        </button>
        {transcript && <p>Voice Input: {transcript}</p>}
      </div>

      <section style={{ marginTop: "2rem" }}>
        <h2>Recent Queries</h2>
        {queries.length === 0 && <p>No queries yet.</p>}
        <ul>
          {queries.map((q) => (
            <li key={q.id} style={{ marginBottom: "0.5rem" }}>
              <strong>{q.text}</strong> <br />
              <small>{new Date(q.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
