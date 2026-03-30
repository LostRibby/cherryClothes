const User = require('../../Models/user.model');

const userAuthorizationMiddleware = ()=>{
    return async(req, res, next)=>{
        const userRouterId = req.params.id; 
        console.log('userRouterId' + userRouterId);

        const userId = req.user.id; 
        console.log('userId'+ userId);

        try{
            const tokenUser = await User.findById(userId); 
            if(!tokenUser){
               return res.status(404).json({statusCode: 404, message : 'Vous n\'existez plus dans la base de donées'}); 
            }else{
              if(tokenUser.role ==='Admin'){
                next(); 
              }  
              else if(userId.toString() === userRouterId){
                next();
              }
              else{
               return res.status(403).json({statusCode:403, message:'Vous n\'avez pas droit d\'accéder aux données!'}); 
              }
            }
        }
        catch(err){
             res.status(500).json({statusCode: 500, message: 'Une erreur est survenue daans la DB'});
        }
        
    }
}
module.exports = userAuthorizationMiddleware; 