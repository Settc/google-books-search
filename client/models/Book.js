const { mongoose, Schema } = require("mongoose")


const bookSchema = new Schema({
    image: {
        type: String
    },
    title: {
       type: String,
       required: true
    },
    authors: {
       type: String,
       required: true
    },
    description: {
       type: String,
       required: true
    },
    link: {
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book