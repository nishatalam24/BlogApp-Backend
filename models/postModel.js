//3 points

//import mongoose
const mongoose = require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },

    //1. likes array refering to likes schema (taking array because in one post there
   //could be more likes )
    
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],

    //2. comments array refering to comments schema (taking array because in one post there
   //could be more comments )
    
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
});




//export(refering to ref:post)
module.exports = mongoose.model("Post", postSchema);

//3. Now go in comment controoller