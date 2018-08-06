exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("event")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("event").insert([
        {
          id: 01,
          event_tag: 072018,
          event_month: "July",
          event_day: "12",
          event_year: 2018,
          event_type: "Trade",
          event_link:
            "https://www.cbssports.com/nba/news/nuggets-trade-kenneth-faried-darrell-arthur-to-nets-in-salary-dump-report-says/",
          event_text:
            "Kenneth Faried, Darrell Arthur, a protected 2019(1- 12) 1st Rd to the Nets for Isaiah Whitehead."
        },
        {
          id: 02,
          event_tag: 072018,
          event_month: "July",
          event_day: "6",
          event_year: 2018,
          event_type: "Trade",
          event_link:
            "https://www.nba.com/nuggets/news/nuggets-trade-wilson-chandler-to-sixers-070618",
          event_text:
            "Wilson Chandler and 2nd Round Pick to Philadelphia 76ers for cash considerations"
        },
        {
          id: 03,
          event_tag: 062018,
          event_month: "June",
          event_day: "25",
          event_year: 2018,
          event_type: "Contract",
          event_link:
            "http://www.nba.com/article/2018/06/25/report-denver-nuggets-nikola-jokic-decline-team-option-get-max-extension",
          event_text:
            "Nikola Jokic, reach agreement on five-year max extension for $146.5 million."
        },
        {
          id: 04,
          event_tag: 062018,
          event_month: "June",
          event_day: "21",
          event_year: 2018,
          event_type: "Draft",
          event_link: "google.com",
          event_text:
            "1st Round 14th Pick - Michael Porter Jr., SF/PF, Missouri"
        },
        {
          id: 05,
          event_tag: 062018,
          event_month: "June",
          event_day: "21",
          event_year: 2018,
          event_type: "Draft",
          event_link: "google.com",
          event_text: "2nd Round 58th Pick - Thomas Welsh, C, UCLA"
        },
        {
          id: 06,
          event_tag: 052018,
          event_month: "April-May",
          event_day: "",
          event_year: 2018,
          event_type: "Playoffs",
          event_link: "google.com",
          event_text: "The Nuggets did not make the playoffs in 2017-18 Season."
        }
      ]);
    });
};
