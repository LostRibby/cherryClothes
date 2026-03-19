const offensiveWords = ["faggot", "fag", "gogol", "pd", "pédé", "pede", "lopette", "nègre", "negro"]

const bodyValidatorMiddleware = ()=>{
    return (req, res, next)=>{
        if(!req.body){
            next(); 
        }

        const fields = Object.keys(req.body);

        for(let field of fields){
            console.log(field);

            const valueInField = req.body[field]; 

            if (typeof valueInField ==='string')
                {
                    if(offensiveWords.some(word => valueInField.toLowerCase().includes(word))){
                        res.status(400).json({statusCode : 400, message : 'contient un mot interdit!'}); 
                    }
                } 
            
        }
        next(); 
    }
}

module.exports = bodyValidatorMiddleware