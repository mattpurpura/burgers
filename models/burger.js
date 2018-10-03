var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(data){
            cb(data);
        })
    },

    insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, function(res){
            cb(res);
        });
    },

    updateOne: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;
