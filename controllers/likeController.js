
//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post

exports.likePost = async (req,res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();// it's similar like create entry in db

        //update the post collection basis on this
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push:/* Push is update operator*/ {likes: savedLike._id} }, {new :true  /*This will return updated document which id inserted */ })
        .populate("likes")/*it gives the actual data  */.exec()/** It executes the populate function */
        res.json({
            post:udpatedPost,
        });

    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}


//Unlike a post
exports.unlikePost = async (req,res) => {

    try{
        const{post, like} = req.body;
        //find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        //udpate the post collection
        const udpatedPost = await Post.findByIdAndUpdate(post,
                                                        {$pull/* Pull is delete  operator*/ : {likes: deletedLike._id} }, 
                                                        {new: true});

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) {
        return res.status(400).json({
            error: "Error while Unliking post",
        });
    }

}




exports.dummyLink = (req,res) => {
    res.send("This is your Dummy Page");
};