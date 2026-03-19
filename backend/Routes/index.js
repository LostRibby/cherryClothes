const userRouter = require('./userRouter');
const authRouter = require('./auth.router'); 

const router = require('express').Router(); 

router.get('/', (req,res)=>{
    res.send("Bienvenue dans votre API d'authentification", 200)
});

router.use('/auth', authRouter); 

router.use('/users', userRouter); 

module.exports = router; 