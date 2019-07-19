const db = require('../dbConfig.js');

module.exports = {
  get,
  addProject,
  addAction,
};

function get(id) {}

// function findById(id) {
//   return db('actions')
//     .where({ id })
//     .first();
// }

function addProject({ name, description, completed }) {
  return db('projects').insert({ name, description, completed });
}

function addAction({ project_id, description, notes, completed }) {
  return db('actions').insert({ project_id, description, notes, completed });
}
