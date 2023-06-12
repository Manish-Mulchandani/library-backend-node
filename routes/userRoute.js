import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { borrowBookController } from "../controllers/userController.js";

const router = express.Router()

// Borrow a book
router.post('/:userId/books/:bookId', requireSignIn, borrowBookController)


export default router