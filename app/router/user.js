'use strict';

import UserController from '../controllers/user';

let userCtrl = new UserController();

let user = (router) => { 
  router.get('/users' ,userCtrl.search);
};

export default user;