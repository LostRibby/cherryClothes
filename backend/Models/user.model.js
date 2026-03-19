const { Schema, model} = require('mongoose'); 

const userSchema = new Schema(
    {
        firstname :{
            type: String, 
            requires: true, 
            trim : true
        },
         lastname :{
            type: String, 
            requires: true, 
            trim : true
        },
         email :{
            type: String, 
            requires: true, 
            trim : true, 
            unique: true
        },
         password :{
            type: String, 
            requires: true, 
            
        },
         role :{
            type: String, 
            requires: true, 
            enum : ['Membre', 'Artiste', 'Admin'], 
            default : 'Membre'
        }
    }, 

{
    collection : 'User', 
    timestamps : true
}); 

const User = model('User', userSchema); 

module.exports = User; 
