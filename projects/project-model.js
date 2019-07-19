const db = require('../dbConfig.js');


module.exports = {
  get,
  addProject,

};


function get(id){



}



function addProject({ name, description, completed }) {
  return db('projects').insert({ name, description, completed });
}
