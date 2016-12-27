'use strict';

import express from 'express';
import user from './user';
import team from './team';
import bodyParser from 'body-parser';

const router = express.Router();

router.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE.OPTIONS');
  res.setHeader('Content-Type','application/json;  charset=utf-8');
  res.setHeader('x-ver','1.0');
  next();
});

router.get('/', (req, res) => res.end('Welcome to SoccerBookmarker API REST'));
user(router);
team(router);


function onRequest(req, res){
  router(req, res, (err) => {
    if(err){
      res.statusCode = 500;
      return res.end('Internal error');
    }
    res.status = 404;
    res.end('404 Not Found');
  });
}

export default onRequest;