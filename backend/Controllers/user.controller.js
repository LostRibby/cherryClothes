const userService = require('../Services/User.service'); 

const UserController = {
    getAll: async (req, res)=>{
        try{
            const query = req.query;
            const users = await userService.find(query);
            res.status(200).json(users);
        }catch{
            console.log(err);
            res.status(500).json({ statusCode:500, message: 'Erreur avec la Base de Données'}); 
        }
    }  
}

module.exports= UserController; 
