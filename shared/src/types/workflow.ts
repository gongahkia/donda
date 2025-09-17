export interface WorkflowStep {
  id: string;
  action: string;
  selector?: string;
  parameters?: any;
  description?: string;
}

export interface Workflow {
  id: string;
  name: string;
  steps: WorkflowStep[];
  website: string;
  userId: string;
  createdAt: string;
}
