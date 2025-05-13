import express from "express";
import { login, logout, update } from "../controller/authController.js";
const authRouter = express.Router();
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/update',update)
export default authRouter;