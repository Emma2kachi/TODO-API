const mongoose= require("mongoose")

const TodoSchema= new mongoose.Schema({
    todo: {
        type: String,
        reqiured: true
        
    },
})

module.exports = new mongoose.model("Todo", TodoSchema)