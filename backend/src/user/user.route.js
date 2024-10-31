import express from "express";
import userController from "./user.controller.js";

const router = express.Router();

router.post("/create-user", userController.createUser);
router.delete("/delete-user", userController.deleteUser);

export default router;
