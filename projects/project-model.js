const db = require('../dbConfig.js');

module.exports = {
  addProject,
  addAction,
  findById,
  findProjectActions,
};

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function findProjectActions(project_id){
  return db('actions')
  .where({project_id})

}


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
