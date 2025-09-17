import React, { useEffect } from "react";
import { useWorkflow } from "../hooks/useWorkflow";

const WorkflowsPage: React.FC = () => {
  const { workflows, fetchWorkflows } = useWorkflow();

  useEffect(() => {
    fetchWorkflows();
  }, [fetchWorkflows]);

  return (
    <main style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Saved Workflows</h1>
      {workflows.length === 0 ? (
        <p>No saved workflows yet.</p>
      ) : (
        <ul>
          {workflows.map((wf) => (
            <li key={wf.id} style={{ marginBottom: "1rem" }}>
              <strong>{wf.name}</strong> (Created:{" "}
              {new Date(wf.createdAt).toLocaleString()})
            </li>
          ))}
        </ul>
      )}
      {/* Potentially add workflow creation/editing features here */}
    </main>
  );
};

export default WorkflowsPage;
