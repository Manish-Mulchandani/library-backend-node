import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { borrowBookController, getUserBooksController, returnBookController } from "../controllers/userController.js";

const router = express.Router()

// Borrow a book
router.post('/:userId/books/:bookId', requireSignIn, borrowBookController)

// Return a book
router.put('/:userId/books/:bookId', requireSignIn, returnBookController)

// Get all books borrowed by a specific user
router.get('/:userId/books', getUserBooksController)


export default router