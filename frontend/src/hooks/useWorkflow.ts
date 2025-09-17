import { useCallback } from "react";
import { useWorkflowStore } from "../store/workflowStore";
import { getWorkflows, saveWorkflow } from "../services/api";

export function useWorkflow() {
  const { workflows, setWorkflows } = useWorkflowStore();

  const fetchWorkflows = useCallback(async () => {
    const response = await getWorkflows();
    if (response.success) setWorkflows(response.data);
  }, [setWorkflows]);

  const addWorkflow = useCallback(
    async (workflowData: any) => {
      const response = await saveWorkflow(workflowData);
      if (response.success) {
        setWorkflows((prev) => [response.data, ...prev]);
        return response.data;
      }
      return null;
    },
    [setWorkflows]
  );

  return { workflows, fetchWorkflows, addWorkflow };
}
