exports.up = function(knex) {
  return knex.schema.createTable('subreddits', table => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable();
    table.string('name', 21).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('subreddits');
};
