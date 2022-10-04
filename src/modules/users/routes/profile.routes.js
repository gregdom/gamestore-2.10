import { Router } from "express";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
import ProfileController from "../controllers/ProfileController.js";
import { celebrate, Joi, Segments, errors } from "celebrate";

const profileRouter = Router();
const profileControllerInit = new ProfileController();

profileRouter.use(isAuthenticated);

profileRouter.get("/", profileControllerInit.read);
profileRouter.put(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      oldpassword: Joi.string().required(),
      password: Joi.string().optional(),
      password_confirmation: Joi.string()
        .valid(Joi.ref("password"))
        .when("password", {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    },
  }),
  profileControllerInit.update
);

profileRouter.use(errors());

export default profileRouter;
