'use strict';

class modelUser {
  constructor(db){
    this.db = db;
    this.name = 'user';
  }

  createCollection(){
    this.db.createCollection(this.name, 
    {
      validator:{
        $and:[
          { username:{ $type: "string" } },
          { password: { $type: "string" } }
        ]
      }
    });
  }
}

export default modelUser;