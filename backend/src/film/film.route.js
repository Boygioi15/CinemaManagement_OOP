import express from "express";
import filmController from "./film.controller.js";
const router = express.Router();

router.post("", filmController.createFilm);
router.delete("/:id", filmController.deleteFilm);
router.get("/:id", filmController.getFilm);
router.patch("/:id", filmController.updateFilm);

export default router;