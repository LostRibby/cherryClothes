const userRouter = require('./userRouter');
const authRouter = require('./auth.router'); 
const router = require('express').Router(); 
const uploadRouter= require('./upload.router');
router.get('/', (req,res)=>{
    res.send("Bienvenue dans votre API d'authentification", 200)
});

router.use('/auth', authRouter); 

router.use('/users', userRouter); 

router.use('/posts', uploadRouter);

module.exports = router; 