'use strict';
import db from '../config/db';
import helpers from '../helpers';
import jsonBody from 'body/any';

class TeamController {
  constructor(){
  }

  search(req, res){
    let teamModel = db.get().collection('team');
    teamModel.find().toArray().then((teams) => {
      helpers.response.success(teams, res);
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