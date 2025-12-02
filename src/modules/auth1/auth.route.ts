import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = Router();
router.post("/login",authController.authUser)

export const authRouter ={
    router
}