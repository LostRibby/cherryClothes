const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    imageUrl:{
        type: String,
        require:true,
    }, 
    user:{
       type : String, 
        ref : "User", 
        require : true,
    },
    createdAt: {
        type : Date,
        default: Date.now
    },
});
const Post = model('post', postSchema); 
module.exports = Post