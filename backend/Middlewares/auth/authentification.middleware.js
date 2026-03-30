const {Request} = require('express'); 
const jwtUtils = require('../../utils/jwt.utils'); 

const authentificationMiddleware = ()=>{
    /**
     * @param { Request } req
     */

    return async (req, res, next)=>{
        const authorization = req.headers.authorization; 

        if(!authorization){
            res.status(401).json({ statusCode: 401, message: 'vous devez être connecté'}); 
        }
        else{
            const token = authorization.split('')[1]; 
            if(!token){
                res.status(401).json({ statusCode: 401, message : 'vous devez être connecté'}); 
            }

            try{
                const playload = await jwtUtils.decode(token); 
                req.user = playload; 
                next(); 
            }
            catch(err){
                res.status(401).json({statuscode : 401, message : 'vous devez être connecté'}); 
            }
        }
    }
}

module.exports = authentificationMiddleware; 