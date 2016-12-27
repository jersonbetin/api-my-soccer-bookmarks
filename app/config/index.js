'use strict';

const config = {
  port: process.env.PORT || 3000,
  env: process.env.ENV || 'dev',
  tokenSecrect: process.env.TOKEN_SECRET || 'mi token',
  dbDev: 'mongodb://admin:admin@ds145168.mlab.com:45168/soccer-bookmarks',
  dbProd: 'mongodb://admin:admin@ds145168.mlab.com:45168/soccer-bookmarks'
};

export default config;