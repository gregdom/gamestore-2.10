import { Router } from "express";
import SessionController from "../controllers/SessionController.js";

const sessionRouter = Router();
const sessionControllerInit = new SessionController();

sessionRouter.post("/", sessionControllerInit.create);

export default sessionRouter;
