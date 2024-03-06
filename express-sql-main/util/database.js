const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "completenode",
  password: "Nidhi@1993",
});

module.exports = pool.promise();
