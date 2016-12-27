'use strict';

import user from './user';
import team from './team';

const models = [{
  name: 'user',
  create: user
},{
  name: 'team',
  create: team
}];

export default models;