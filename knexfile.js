module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///dn_events"
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
