import express from "express";
import { registerController } from "../controllers/authController.js";

const router = express.Router()

// Register
router.post('register', registerController)