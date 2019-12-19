// Added a new line in new branch!
import express from 'express';
import config from './config';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';
import apiRouter from './api';
import serverRender from './serverRender';



const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname , 'sass'),
    dest: path.join(__dirname , 'public')
}));


server.set('view engine', 'ejs');


server.get(['/', '/contests/:contestId'], (req, res)=>{
    serverRender(req.params.contestId)
        .then(({ initialMarkup, initialData })=>{
            res.render('index',{
                initialMarkup,
                initialData
            });
        })
        .catch(console.error)
    
});

server.use('/api', apiRouter);

server.use(express.static('public'));
server.listen(config.port, config.host, ()=>{
    console.info("Server listening on the port",config.port);
});