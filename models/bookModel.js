import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    author: {
        type:String,
        required:true,
    },
    genre: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    availabilityStatus: {
        type: String,
        enum: ['available', 'borrowed'],
        default: 'available'
    }
})

export default mongoose.model('books', bookSchema)