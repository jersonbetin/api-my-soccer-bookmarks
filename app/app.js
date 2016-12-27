'use strict';

import http from 'http';
import config from './config';
import db from './config/db';

import router from './router';

const server = http.createServer();
let url = config.dbDev;

server.on('listening', onListening);
server.on('request', router);

if(config.env === 'prod') url = config.dbProd;

db.connect(url, (err) => {
  if(err){
    console.log('error al conectarse' , err);
    return err;
  }

  server.listen(config.port);
  console.log('connected to database');
});


function onListening(){
  console.log(`Server running in http://localhost:${config.port}`);
}