import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => (
  <main
    style={{
      maxWidth: "600px",
      margin: "auto",
      padding: "2rem",
      textAlign: "center",
    }}
  >
    <h1>404 - Page Not Found</h1>
    <p>The page you requested does not exist.</p>
    <Link to="/">Go back to Home</Link>
  </main>
);

export default NotFoundPage;
