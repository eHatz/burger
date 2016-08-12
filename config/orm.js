// create the methods that will execute the necessary MySQL commands in the controllers. These are the 
// methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.
var connection = require('./connection.js').connection;


var ORM = {
	selectAll: function(result) {
		connection.query('SELECT * FROM burgers', function(err, data){
			if (err) {
				throw err;
			};
			var devouredBurg = [];
			var newBurg = [];

			for (var i = 0; i < data.length; i++) {
				if (data[i].devoured === 0) {
					newBurg.push(data[i]);
				} else {
					devouredBurg.push(data[i])
				}
			};
			var allBurgers = {
				new: newBurg,
				devoured: devouredBurg
			};
			result.render('index', allBurgers);
		})
	},

	insert: function(name) {
		var newBurger = {
			burger_name: name,
			devoured: false
		}
		connection.query('INSERT INTO burgers SET ?', newBurger, function(err, data) {
			if (err) {
				throw err;
			};

		})
	},

	update: function(id){
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function(err, data) {
			if (err) {
					throw err;
			};

		})
	}
};

module.exports = ORM;