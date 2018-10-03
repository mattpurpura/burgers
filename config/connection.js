// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "tti7spnj2b23fka7",
  password: "huluro0azz338q8j",
  database: "kg7p8f2v5io9v1gy"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;