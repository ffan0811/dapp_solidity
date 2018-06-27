var express = require("express");  
var app = express();  

var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:6845"));	

app.listen(8081, function(){
	console.log("connected");
})

app.use(express.static("public"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/html/index.html");
})