'use strict';

import db from '../config/db';
import helpers from '../helpers';
import { ObjectId } from 'mongodb';

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

  find(req, res){
    const userId = new ObjectId(req.params.id);
    let query = { _id: userId };
    let userModel = db.get().collection('user');
    userModel.findOne(query).then((user) => {
      helpers.response.success(user, res);
    }).catch((error) => {
      return helpers.errors.fail(error, res);
    });
  }
}

export default UserController;