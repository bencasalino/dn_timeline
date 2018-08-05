const database = require("./database-connection");

module.exports = {
  list(path) {
    return database(path).select();
  },
  //get
  read(name, path) {
    return database(path)
      .select()
      .where("location", location);
    // .first();
  },
  // post
  create(body, path) {
    return database(path)
      .insert(body)
      .returning("*")
      .then(record => record[0]);
  },
  // put
  update(location, body, path) {
    return database(path)
      .update(body)
      .where("location", location)
      .returning("*")
      .then(record => record[0]);
  },
  delete(location, path) {
    return database(path)
      .delete()
      .where("location", location);
  }
};

