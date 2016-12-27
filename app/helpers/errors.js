'use strict'; 
import json from './json';

function fail(error, res){
  res.statusCode = 500;
  res.setHeader('Content-Type', 'application/json');
  res.end(json.error('Internal server error',error.message , res.statusCode));
}

export default {
  fail: fail
};