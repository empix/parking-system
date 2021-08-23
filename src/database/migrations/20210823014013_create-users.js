exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');

    table.string('name').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.enum('role', ['admin', 'employee']).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
