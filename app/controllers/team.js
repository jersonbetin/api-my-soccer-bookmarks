'use strict';
import db from '../config/db';
import helpers from '../helpers';
import jsonBody from 'body/any';
import { ObjectId } from 'mongodb';

class TeamController {
  constructor(){
  }

  search(req, res){
    let teamsComplete = [];
    let teamModel = db.get().collection('team');
    let userModel = db.get().collection('user');
    teamModel.find().toArray().then((teams) => {
      teams.forEach( function(team, index) {        
        const userId = new ObjectId(team.owner);
        let query = { _id: userId };
        userModel.findOne(query, { password: 0 }).then(( user ) => {
          teamsComplete.push({
            _id: team._id,
            name: team.name,
            owner: user
          });
          if(index === teams.length-1){
            helpers.response.success(teamsComplete, res);
          }
        });
      });
    });
  }

  add(req, res){
    jsonBody(req, res, (err, body) => {
      if(err) return helpers.errors.fail(err, res);
      let newTeam = {
        name: body.name,
        owner: body.owner
      };
      let teamModel = db.get().collection('team');
      teamModel.insertOne(newTeam).then((team) => {
        console.log(team.ops[0]);
        helpers.response.success(team.ops[0], res);
      }).catch((error) => {
        return helpers.errors.fail(error, res);
      });
    });
  }

  find(req, res){
    let query = { name: req.params.name };
    let teamModel = db.get().collection('team');
    teamModel.findOne(query).then((team) => {
      helpers.response.success(team, res);
    }).catch((error) => {
      return helpers.errors.fail(error, res);
    });
  }
}

export default TeamController;