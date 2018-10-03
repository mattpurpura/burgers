var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, results){
            if (err) throw err;

            cb(results)
        })
    },

    insertOne: function(burger_name, cb){
        let queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger_name], function(err, result){
            if (err) throw err;
            console.log("Burger added to DB");
            cb(result);
        })
    },

    updateOne: function(id, cb){
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function(err, result){
            if (err) throw err;
            console.log("You devoured the burger");
            cb(result);
        })
    }
}

module.exports = orm;

