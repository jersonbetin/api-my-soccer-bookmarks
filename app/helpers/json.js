'use strict';

function success(message, data){
  return JSON.stringify({
    message: message,
    data:data
  });
}

function error(message, error, code){
  return JSON.stringify({
    message: message,
    error:error,
    code:code
  });
}
export default {
  success: success,
  error: error
};