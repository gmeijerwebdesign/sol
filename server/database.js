const mysql = require("mysql2");

const DB = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "schilder",
  })
  .promise();

module.exports = DB;
