import { Joi } from "celebrate";

export const bodySchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});
