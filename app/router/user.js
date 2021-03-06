'use strict';

import UserController from '../controllers/user';

let userCtrl = new UserController();

let user = (router) => { 
  router.get('/users' ,userCtrl.search);
  router.get('/users/:id' ,userCtrl.find);
};

export default user;