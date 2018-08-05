exports.up = function(knex, Promise) {
  return knex.schema.createTable("event", table => {
    // game id
    table.increments("id").primary();
    table.string("event_date");
    table.text("event_year");
    table.text("event_link");
    table.text("event_text");
    table.text("event_type");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("event");
};
