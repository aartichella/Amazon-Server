var mongo = require("../helper/mongodb");
var mongoURL = "mongodb://localhost:27017/amazonDB";
var ObjectId = require('mongodb').ObjectID;
var bcrypt = require('bcrypt-nodejs');
var mysql = require("../helper/mysql");

function signup(msg, callback){
	console.log("Inside signup");
		var json_responses = {};
		/*var sqlQuery = "Insert into testUserDetails(`Email`,`Pass`,`FirstName`, `LastName`, `UserHandler`, `BirthDate`, `Location`) VALUES  " +
	    "( '"+email+"' , '"+ password+"' ,'" + firstName +"' ,'" + lastName +"','"+ userHandler +"' ,'" + dateOfBirth +"' ,'" + location +"')";
	    console.log(sqlQuery);
	    mysql.getConnection(function(err, conn){
	    	conn.query(sqlQuery, function(err, rows){
		        if(err){
		        	console.log("returned false"+err);
					json_responses.code = "401";
					json_responses.value = "Failed SignUp";
		        }else{
		        	console.log("User details inserted sucessfully");
					json_responses.code = "200";
					json_responses.value = "Succes SignUp";	
		        }
		        callback(null, res);
	    	});*/
}

exports.handle_request = function(req, callback){
	console.log("Inside handle_request");
	var operation = req.operation;
	var message = req.message;
	var res = {};
	switch(operation){	
		case "signup" :
			signup(message,callback);
			break;		
		default : 
		res.code = "401";
		res.value = "Bad Request";
		callback(null, res);
	}
};