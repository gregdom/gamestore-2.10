import { Router } from "express";
import MarketController from "../controllers/ProfileController.js";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
import { celebrate, Joi, Segments, errors } from "celebrate";

const marketRouter = Router();
const marketControllerInit = new MarketController();

marketRouter.use(isAuthenticated);

marketRouter.post(
  "/register-product",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      slug: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      release: Joi.string().required(),
    },
  }),
  marketControllerInit.create
);

marketRouter.post(
  "/register-product/:id",
  celebrate({
    [Segments.BODY]: {
      cpumin: Joi.string().required(),
      videocardmin: Joi.string().required(),
      rammemorymin: Joi.string().required(),
      storagemin: Joi.string().required(),
      cpurec: Joi.string().required(),
      videocardrec: Joi.string().required(),
      rammemoryrec: Joi.string().required(),
      storagerec: Joi.string().required(),
      category: Joi.string().required(),
      media: Joi.array().items(
        { mediaurl: Joi.string().required() },
        { mediaurl: Joi.string().required() },
        { mediaurl: Joi.string().required() },
        { mediaurl: Joi.string().required() },
        { mediaurl: Joi.string().required() }
      ),
    },
  }),
  marketControllerInit.createDetails
);

marketRouter.get("/", marketControllerInit.read);

marketRouter.use(errors());

// import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
// userRouter.get("/", isAuthenticated, userControllerInit.findAllUsers);
export default marketRouter;
