var express = require('express');
var website = express();

//set port
var port = process.env.PORT || 8080

website.use(express.static(__dirname));

//routes
website.get("/", function (req,res) {
    res.render("index");
})

website.listen(port, function(){
    console.log("website running");
})