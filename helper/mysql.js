 var mysql = require('mysql');

 var pool = mysql.createPool({
     connectionLimit : 10000, //important
     host     : '198.71.227.98',
     user     : 'cmpe',
     password : 'cmpe273',
     database : 'cmpe273',
     debug    :  false,
	 port	  : 3306,
     waitForConnections : true,
     queueLimit : 500
 });
 
exports.getConnection = function(callback) {
	    pool.getConnection(function(err, connection) {
	        callback(err, connection);
	});
};