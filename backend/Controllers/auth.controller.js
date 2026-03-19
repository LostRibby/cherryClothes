const authService = require('../Services/auth.service'); 
const jwtUtils = require('../utils/jwt.utils'); 

const authController = {
    register: async (req, res)=>{
        try{
            const userToAdd = req.body; 

            if(await authService.emailAlreadyExist(userToAdd.email)){
                res.status(409).json({statusCode:409,message : 'Cet email est déjà utilisé'});

            }
            const userCreated = await authService.create(userToAdd);

            res.location(`/api/user/${userCreated._id}`); 
            res.status(201).json({
                id: userCreated._id, 
                firstname : userCreated.firstname, 
                lastname: userCreated.lastname
            }); 
        } catch(err){
            res.sendStatus(500); 
        }
    }, 
    login: async(req, res)=>{
        try{
            const credentials = req.body; 
            const userFound= await authService.findCredentials(credentials); 
            

            if(!userFound){
              res.status(401).json({ statusCode:401, message : 'les informations de connexion ne sont pas bonnes'})
            
            }else{
                const token = await jwtUtils.generate(userFound); 
                
                  res.status(200).json({
                    id: userFound._id, 
                    firstname : userFound.firstname, 
                    lastname : userFound.lastname,
                    token 
                }); 
            }
        }catch(err){
            console.log(err);
            res.sendStatus(500); 
            
        }
    }
}

module.exports = authController; 