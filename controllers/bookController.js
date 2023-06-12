import mongoose from 'mongoose';
import bookModel from '../models/bookModel.js';

export const getBooksController = async (req,res) => {
    try {
        const books = await bookModel.find({});
        res.status(200).json(books);

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting books",
            error
        })
    }
}

export const addBookController = async (req,res) => {
    try {
        const { title, author, genre, publicationDate, availabilityStatus } = req.body
        const newBook = await new bookModel({title,author,genre,publicationDate,availabilityStatus}).save()
        res.status(201).send({
            success:true,
            message: "Book Added Successfully",
            newBook,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting books",
            error
        })
    }
}

export const getBookById = async (req,res) => {
    try {
        const bookId = req.params.id;
        const book = await bookModel.findById(bookId);
        if(!book){
            return res.status(400).send({
                success: false,
                message: "Book with the specified id not found"
            })
        }
        res.status(200).send(book)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in getting book by Id",
            error
        })
    }
}


export const updateBookById = async (req,res) => {
    try {
        const bookId = req.params.id;
        const updatedData = req.body;
        
        const bookIndex = bookModel.findIndex((book)=>book.id===bookId);

        if(bookIndex!==-1){
            bookModel[bookIndex] = {...bookModel[bookIndex], ...updatedData};
            res.status(200).send({
                success:true,
                message: "Book Updated successfully",
                book: bookModel[bookIndex],
                updatedData
            })
        } else {
            res.status(400).send({
                success: false,
                message: "Book not found",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in updating book by Id",
            error
        })
    }
}

/*export const deleteBookById = async (req,res) => {
    try {
        const bookId = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({
                message: "Invalid Book ID"
            })
        }

        const deletedBook = await bookModel.

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in deleting book by Id",
            error
        })
    }
}
*/