import express, { Request, Response }  from "express";
import { Pool } from "pg";
import config from "../../config/index.js";
import { userController } from "./user.controller.js";
import { logger } from "../../middleware/logger.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

export const pool = new Pool({
    connectionString:config.app.DB
})
router.post("/",userController.createUser)
router.get("/",logger,auth('admin'),userController.getUser)
router.get("/:id",userController.getsingleUser)
router.put("/:id",userController.putsingleuser)
router.delete("/:id",userController.deleleSingleUser)
export {router as userRouter}