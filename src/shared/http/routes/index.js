import { Router } from "express";
// import adminRouter from "../../../modules/admin/routes/admin.routes.js";
import passRouter from "../../../modules/users/routes/password.routes.js";
import profileRouter from "../../../modules/users/routes/profile.routes.js";
import sessionRouter from "../../../modules/users/routes/session.routes.js";
import userRouter from "../../../modules/users/routes/user.routes.js";
import marketRouter from "../../../modules/marketplaces/routes/product.routes.js";

const routes = Router();

// routes.use("/admin", adminRouter);
routes.use("/users", userRouter);
routes.use("/session", sessionRouter);
routes.use("/password", passRouter);
routes.use("/profile", profileRouter);
routes.use("/marketplaces", marketRouter);

export default routes;
