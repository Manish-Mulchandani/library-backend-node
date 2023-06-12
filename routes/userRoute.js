import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { borrowBookController, returnBookController } from "../controllers/userController.js";

const router = express.Router()

// Borrow a book
router.post('/:userId/books/:bookId', requireSignIn, borrowBookController)

// Return a book
router.put('/:userId/books/:bookId', requireSignIn, returnBookController)


export default router