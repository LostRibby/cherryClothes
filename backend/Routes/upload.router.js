
const Post = require('../Models/post.model'); 
const User = require('../Models/user.model'); 
const multer = require('multer'); 
const path = require('path'); 
const express = require('express'); 

const uploadRouter= express.Router();

const { PORT } = process.env;

const storage = multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null,'post/');
    },
    filename: (req,file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage}); 

uploadRouter.use('/posts', express.static('post')); 

uploadRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username email")
      .sort({ createdAt: -1 }); 

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

uploadRouter.post('/', upload.single('image') , async(req, res)=>{
    try {
        const userId = req.body.userId; 
        if(!req.file){
            return res.status(400).json('aucun fichier'); 

        }

        const user = await User.findById(userId); 
        if(!user){
            return res.status(404).json({error : 'user non trouvé'}); 
        }

        const imageUrl = `http://localhost:${PORT}/api/posts/${req.file.filename}`; 
    

        const post = await Post.create({
            imageUrl, 
            user : userId, 
              
        })
        res.json(post); 
    }catch(err){
     console.error(err);
    res.status(500).json({ error: "Erreur serveur" });   
    }
})




module.exports = uploadRouter