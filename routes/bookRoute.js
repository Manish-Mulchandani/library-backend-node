import express from 'express';
import { addBookController, deleteBookById, getBookById, getBooksController, updateBookById } from '../controllers/bookController.js';

const router = express.Router()

// Get all Books
router.get('/', getBooksController)

// Add books
router.post('/', addBookController)

// Get book by Id
router.get('/:id', getBookById)


// Update book by Id
router.put('/:id', updateBookById)

// Delete book by Id
router.delete('/:id', deleteBookById)


export default router