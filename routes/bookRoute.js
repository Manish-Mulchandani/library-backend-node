import express from 'express';
import { addBookController, getBookById, getBooksController } from '../controllers/bookController.js';

const router = express.Router()

// Get all Books
router.get('/', getBooksController)

// Add books
router.post('/', addBookController)

// Get book by Id
router.get('/:id', getBookById)


// Update book by Id
router.put('/:id', getBookById)


export default router