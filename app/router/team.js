'use strict';
import TeamController from '../controllers/team';

let teamCtrl = new TeamController();

let team = (router) => {
  router.get('/teams', teamCtrl.search);
  router.get('/teams/:name', teamCtrl.find);
  router.post('/teams', teamCtrl.add);
};

export default team;