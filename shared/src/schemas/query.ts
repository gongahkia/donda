import Joi from "joi";

export const querySchema = Joi.object({
  text: Joi.string().min(1).required(),
});
