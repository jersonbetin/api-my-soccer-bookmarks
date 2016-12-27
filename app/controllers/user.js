'use strict';

import db from '../config/db';
import helpers from '../helpers';

class UserController {
  constructor(){
  }

  search(req, res){
    let usersModel = db.get().collection('user');
    usersModel.find({}, {password:0}).toArray().then((users)=>{      
      //console.log('response ', users);
      helpers.response.success(users, res);
    });
  }
}

export default UserController;