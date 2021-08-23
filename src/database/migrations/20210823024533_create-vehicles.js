exports.up = function (knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments('id');

    table.string('license_plate', 7).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('vehicles');
};
