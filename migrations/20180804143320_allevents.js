exports.up = function(knex, Promise) {
  return knex.schema.createTable("event", table => {
    // game id
    table.increments("id").primary();
    table.integer("event_tag");
    table.text("event_month");
    table.text("event_day");
    table.integer("event_year");
    table.text("event_type");
    table.text("event_link");
    table.text("event_text");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("event");
};
