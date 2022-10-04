import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { celebrate, Joi, Segments, errors } from "celebrate";

const userRouter = Router();
const userControllerInit = new UserController();

userRouter.post(
  "/register",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      cpf: Joi.string().required(),
    },
  }),
  userControllerInit.create
);

userRouter.use(errors());

// import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
// userRouter.get("/", isAuthenticated, userControllerInit.findAllUsers);
export default userRouter;
