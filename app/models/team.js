'use strict';

class modelTeam {
  constructor(db){
    this.db = db;
    this.name = 'team';
  }

  createCollection(){
    this.db.createCollection(this.name, {
      validation:{
        $and:[
          { name : { $type: 'string' } },
          { owner: { $type: 'ObjectId', $ref: 'user' } }
        ]
      }
    });
  }
}

export default modelTeam;