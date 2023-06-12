import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()

// Register
router.post('/register', registerController)

// Login
router.post('/login', loginController)

// test
router.get('/test', requireSignIn, testController)

export default router