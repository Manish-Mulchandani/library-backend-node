import bookModel from '../models/bookModel.js';

export const borrowBookController = async (req,res) => {
    try {
        console.log(req.params.userId)
        console.log(req.userId)
        if(req.params.userId  === req.userId){
            const bookId = req.params.bookId
            const book = await bookModel.findById(bookId)
            if(!book) {
                return res.status(400).send({
                    message: "Book not found"
                })
            }
            if(book.availabilityStatus === 'borrowed'){
                return res.status(400).send({
                    message: "Book is already borrowed"
                })
            }

            book.availabilityStatus = 'borrowed';
            await book.save()
            return res.status(200).send({
                message: "Book borrowed successfully",
                book
            })
            
        } else {
            return res.status(400).send({
                error: "Different user signed in"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "Something went wrong while borrowing book",
            error
        })
    }
    
}