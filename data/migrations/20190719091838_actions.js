exports.up = function(knex) {
  return knex.schema.createTable('actions', table => {
    table.increments();

    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.text('description').notNullable();
    table.text('notes').notNullable();
    table.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('actions');
};
