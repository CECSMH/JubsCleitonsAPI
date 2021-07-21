const express = require('express');
const server = express();
const cors = require('cors');
const routes = require('./routes/routes');

server.use(cors());
server.use(express.json());

server.use('/store', routes);

server.listen(8080, ()=>{
    console.log('ONLINE!');
})