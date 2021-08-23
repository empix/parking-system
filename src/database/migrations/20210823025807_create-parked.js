exports.up = function (knex) {
  return knex.schema.createTable('parked', (table) => {
    table.increments('id');

    table.integer('user_id').unsigned().notNullable();
    table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.integer('vehicle_id').unsigned().notNullable();
    table
      .foreign('vehicle_id')
      .references('vehicles.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.decimal('price_per_hour', 5, 2).notNullable();
    table.datetime('start_date').notNullable();
    table.datetime('end_date');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('parked');
};
