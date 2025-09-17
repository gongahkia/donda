import create from "zustand";
import { Workflow } from "../types/workflow";

interface WorkflowState {
  workflows: Workflow[];
  setWorkflows: (workflows: Workflow[]) => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  workflows: [],
  setWorkflows: (workflows) => set({ workflows }),
}));
