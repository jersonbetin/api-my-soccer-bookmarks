'use strict';

import json from './json';

function success(info, res){
  res.codeStatus = 200,
  res.setHeader('Content-Type', 'application/json');
  res.end(json.success('Ok', info));
}

export default {
  success:success
};