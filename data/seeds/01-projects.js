
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Building the house',
      description:
        'You first need the bricks to build the house of course and plan',
    },
  ]);
};
