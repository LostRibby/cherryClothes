const express = require('express'); 
const UserRouter = express.Router(); 

const User = require('../Models/user.model'); 

UserRouter.post('/api/user', async(req,res)=>{
   try{
    const newUser = new User(req.body); 
    const savedUser = await newUser.save();
    res.status(201).json({savedUser}); 
   } catch(err){
res.status(400).json({statusCode : 400,message: 'une erreur est survenue'});
   }
}); 

UserRouter.get('/', async(req, res)=>{
    try{
        const users= await User.find(); 
        res.json(users); 
    }catch{
        res.status(500).json({statusCode:500, message : 'Une erreur est survenue'}); 
    }
})

module.exports =UserRouter; 