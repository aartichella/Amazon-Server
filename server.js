//super simple rpc server example
var amqp = require('amqp'), util = require('util');
var mongoURL = "mongodb://cmpeUser:cmpe273@aws-us-east-1-portal.16.dblayer.com:10187/amazonDB";

var loginService = require('./services/login');
var mysql = require("./helper/mysql");
var mongo = require("./helper/mongodb");
var cnn = amqp.createConnection({host:'127.0.0.1'});

function publishQueue(conn,m,response){
	conn.publish(m.replyTo, response, {
		contentType:'application/json',
		contentEncoding:'utf-8',
		correlationId:m.correlationId
	});
}

cnn.on('ready', function(){
	console.log("listening on login_queue");
	
	cnn.queue('login_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			util.log(util.format( deliveryInfo.routingKey, message));
			util.log("Message: "+JSON.stringify(message));
			util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			loginService.handle_request(message, function(err,res){
				//return index sent
				publishQueue(cnn,m,res);
			});
		});
	});
	
});
