'use strict';

import mongodb from 'mongodb';
import models from '../models';

let mongoClient = mongodb.MongoClient;

let state = {
  db: null
};

function connect(url, done){
  if(state.db) return done();

  mongoClient.connect(url, (err, db) =>{
    if(err){
      return done(err); 
    }
    db.listCollections().toArray().then((collections) => {
      //console.log(collections)
      if(collections.length){
        collectionsNameToArray(collections).then((result) => {
          models.forEach((model) => {
            if(result.indexOf(model.name) === -1){              
              let temp = new model.create(db);
              console.log(`Creating collections ${model.name}`);
              temp.createCollection();
            }           
          });
        });
      }

      if(!collections.length){
        models.forEach((model) => {           
          let temp = new model.create(db);
          console.log(`Creating collections ${model.name}`);
          temp.createCollection();    
        });
      }
    });

    state.db = db;
    done();
  });

}

function collectionsNameToArray(collections){
  let nameCollections = [];
  let promise = new Promise((resolve) => {
    collections.map((collection) => {
      nameCollections.push(collection.name);
      if(collections.length === nameCollections.length){
        resolve(nameCollections);
      }
    });    
  });
  return promise;
}


function get(){
  return state.db;
}

function close(done){
  if(state.db){
    state.db.close((err) => {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
}

export default {
  connect: connect,
  get: get,
  close: close
};