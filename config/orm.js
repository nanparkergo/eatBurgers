// require main database connection
var connection = require('./connection.js');

// create OBJECT with methods of what can do with db
// ORM.all - will get all data from db
// ORM.create - all to make new data put in db
// ORM.update - update existing data

var orm = {
	all: function(tableInput, cb) {
		connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
			if(err) throw err;
			cb(result)
		})
	}
}
module.exports = orm;