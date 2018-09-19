// Set up MySQL connection.
var mysql = require("mysql2");
require("dotenv").config();


var connection;

if (process.env.JAWSDB_URL) {
    console.log("USING JAWS");
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 8889,
        host: "127.0.0.1",
        user: "root",
        password:"root",
        database: "burgers_db"
    });
}


// console.log("Here is the connection" + connection)


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