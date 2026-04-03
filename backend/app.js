const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const uploadRouter = require('./Routes/upload.router');
const server = express();


const { PORT, MONGODB_URI } = process.env;
server.use(uploadRouter);
if (!PORT || !MONGODB_URI) {
    console.error('probleme avec .env')
}


server.get('/', (req, res) => {
    res.send('API OK');
});
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));



const LogMiddleware = require("./Middlewares/log.middleware");
server.use(LogMiddleware());

const UserRouter = require("./Routes");
const router = require('./Routes');
const { Router } = require('react-router-dom');


server.use('/api', UserRouter);
server.use(router); 


mongoose.connect(MONGODB_URI, { dbName: 'CheryClothesDB' })
    .then(() => {
        console.log('connecté à la DB');
        server.listen(PORT, () => {
            console.log(`Server démarré au port ${PORT}`)
        });

    })
    .catch(err => {
        console.log('erreur de connection à la db')
    })


