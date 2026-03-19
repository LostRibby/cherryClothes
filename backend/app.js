const express = require('express');
 const cors = require('cors'); 
const server = express();

const { PORT, MONGODB_URI } = process.env;
const mongoose = require("mongoose");

server.use(cors()); 
server.use(express.json());

const LogMiddleware = require("./Middlewares/log.middleware");
server.use(LogMiddleware());


mongoose.connect(MONGODB_URI, { dbName: 'CheryClothesDB' })
    .then(() => {
        console.log('connecté à la DB');
        server.listen(PORT, () => {
            console.log(`Server démarré au port ${PORT}`)
        });

    })
    .catch(err =>{ 
        
    })
const UserRouter = require("./Routes");
server.use('/api',UserRouter);
 
