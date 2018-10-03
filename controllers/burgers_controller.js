var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index", burgersObj);
    })
})

router.post("/api/burgers", function(req, res){
    console.log(req.body);
    var burgerName = req.body.burger_name;
    console.log(burgerName);
    burger.insertOne(burgerName, function(result){
        res.send(result);
    });
})

router.put("/api/burgers/:id", function(req, res){
    console.log(req.params.id)
    var id = req.params.id;
    burger.updateOne(id, function(result){
        res.send(result);
    });
})

module.exports = router;