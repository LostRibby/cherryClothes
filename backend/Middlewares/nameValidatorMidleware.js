const offensiveWords = ["faggot", "fag", "gogol", "pd", "pédé", "pede", "lopette", "nègre", "negro","trump",'elon']

const nameValidatorMiddleware = ()=>{
    return(req, res, next) =>{
        if(!req.body){
            next(); 
        }
        if(!req.body.name){
            next(); 
        }

        const name = req.body.name.toLowerCase(); 

        if(offensiveWords.some(word =>name.includes(word))){
            res.status(400).json({statusCode : 400, message : 'contient des mots interdits!!!!'});

        }
        next(); 

    }
}
module.exports = nameValidatorMiddleware; 