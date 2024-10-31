import express from "express";
import userRouter from "./user/user.route.js";
import filmRouter from "./film/film.route.js";

const router = express.Router();

router.use("/api/user", userRouter);
router.use("/api/film", filmRouter);
//router.use("/api/user", userRouter);

export default router;