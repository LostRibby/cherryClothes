const express = require('express');
 const cors = require('cors'); 
const mongoose = require("mongoose");
const server = express();

const { PORT, MONGODB_URI } = process.env;

if(!PORT || !MONGODB_URI){
    console.error('probleme avec .env')
}

server.use(cors()); 
server.use(express.json());

const LogMiddleware = require("./Middlewares/log.middleware");
server.use(LogMiddleware());

const UserRouter = require("./Routes");
server.use('/api',UserRouter);

mongoose.connect(MONGODB_URI, { dbName: 'CheryClothesDB' })
    .then(() => {
        console.log('connecté à la DB');
        server.listen(PORT, () => {
            console.log(`Server démarré au port ${PORT}`)
        });

    })
    .catch(err =>{ 
        console.log('erreur de connection à la db')
    })

 
