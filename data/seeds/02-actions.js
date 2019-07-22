
exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'action wake up',
      notes: 'some text about action details',
    },
    {
      project_id: 1,
      description: 'work out',
      notes: 'Work out every day',
    },
    {
      project_id: 1,
      description: 'Dont give up',
      notes: 'keep pushing',
    },
  ]);
};
