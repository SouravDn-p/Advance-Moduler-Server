import express from "express";
import { userController } from "./user.controller";
import { authGuard } from "../../middlewares/authGuard";

export const router = express.Router();

router.get("/users", authGuard, userController.getAllUsers);
