// create the methods that will execute the necessary MySQL commands in the controllers. These are the 
// methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.
var connection = require('./connection.js').connection;


var ORM = {
	selectAll: function() {
		connection.query('SELECT * FROM burgers', function(err, res){
			if (err) {
				throw err;
			}
			console.log(res);
		})
	},

	insert: function(name) {
		var newBurger = {
			burger_name: name,
			devoured: false
		}
		connection.query('INSERT INTO burgers SET ?', newBurger, function(err, res) {
			if (err) {
				throw err;
			}

		})
	},

	update: function(id){
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function(err, res) {
			if (err) {
					throw err;
			}

		})
	}
};

module.exports = ORM;