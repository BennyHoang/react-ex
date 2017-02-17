import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');


server.use('/api', apiRouter);

server.get('/',(req, res) => {
    res.render('index', {
        content: 'Hello Express and EJS'
    });

});

server.use(express.static('public'));

server.listen(config.port, () => {
    console.info("Express listening to port ", config.port);
});