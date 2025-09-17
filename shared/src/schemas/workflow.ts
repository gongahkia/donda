import Joi from "joi";

export const workflowStepSchema = Joi.object({
  id: Joi.string().required(),
  action: Joi.string().required(),
  selector: Joi.string().optional(),
  parameters: Joi.any().optional(),
  description: Joi.string().optional(),
});

export const workflowSchema = Joi.object({
  id: Joi.string().optional(),
  name: Joi.string().min(1).required(),
  steps: Joi.array().items(workflowStepSchema).required(),
  website: Joi.string().required(),
  userId: Joi.string().required(),
});
