import React from "react";
import { useSettingsStore } from "../store/settingsStore";

const SettingsPage: React.FC = () => {
  const { darkMode, toggleDarkMode } = useSettingsStore();

  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Settings</h1>
      <section style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />{" "}
          Enable Dark Mode (placeholder toggle)
        </label>
      </section>
      {/* Additional user preferences and API key management can be added here */}
    </main>
  );
};

export default SettingsPage;
