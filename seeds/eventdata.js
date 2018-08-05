exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("event")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("event").insert([
        {
          id: 01,
          event_date: "July 12",
          event_year: 2018,
          event_link:
            "https://www.cbssports.com/nba/news/nuggets-trade-kenneth-faried-darrell-arthur-to-nets-in-salary-dump-report-says/",
          event_text:
            "Kenneth Faried, Darrell Arthur, a protected 2019(1- 12) 1st Rd to the Nets for Isaiah Whitehead.",
          event_type: "Trade"
        },
        {
          id: 02,
          event_date: "July 15",
          event_year: 2017,
          event_link:
            "https://www.cbssports.com/nba/news/nuggets-trade-kenneth-faried-darrell-arthur-to-nets-in-salary-dump-report-says/",
          event_text: "Michael Porter Jr. 14th Overall",
          event_type: "Drafted"
        }
      ]);
    });
};
