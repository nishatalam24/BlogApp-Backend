//import mongoose

//7 points are there 

//1. taking reference of mongoosee
const mongoose = require("mongoose");


//route handler

//2.defining schema comment schema
const commentSchema = new mongoose.Schema({

    //3. which post 
    post:{
        //4. whenever we refer any other model or object we do like this type will store id (refering postmodel)
        type: mongoose.Schema.Types.ObjectId,
        //5.reference to the post model because we exported postmodel as (post) see
        //post model search (refering to ref:post)
        ref: "Post", 
    },

    //6.you know below code 
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);

//7. Now go in like model