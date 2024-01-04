//2 points

//import mongoose
const mongoose = require("mongoose");


//route handler

const likeSchema = new mongoose.Schema({

    //1. you know that below lines also
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
});

//export
module.exports = mongoose.model("Like", likeSchema);

//2. Now go in post model