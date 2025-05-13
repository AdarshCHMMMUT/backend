import express from 'express'
import { getUserData } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/data',  getUserData)

export default userRouter;