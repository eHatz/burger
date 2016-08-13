// import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.
var orm = require('../config/orm.js');

burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) { // the param res now contains the value from the table so it really looks like: function(dbRes)
			cb(res);
		});
	},
	create: function(name) {
		orm.insert('burgers', name);
	},

	update: function(id) {
		orm.update('burgers', id);
	}

};
