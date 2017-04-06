var getBurger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  
 getBurger.selectAll(function(data) {
   
   res.render("index", {burger:data});
 });
});


router.post("/", function(req, res) {
 
 getBurger.createOne(req.body.burger, function(result) {
   console.log(result);
   res.redirect("/");
 });
});


router.put("/:id", function(req, res) {
 getBurger.updateOne(req.params.id, function(result) {
   console.log(result);
   res.redirect("/");
 });
});

module.exports = router;