'use strict';

module.exports = function(app) {
	var tests = require('../controllers/tests.server.controller');
	var testsPolicy = require('../policies/tests.server.policy');

	// Tests Routes
	app.route('/api/tests').all()
		.get(tests.list).all(testsPolicy.isAllowed)
		.post(tests.create);

	app.route('/api/tests/:testId').all(testsPolicy.isAllowed)
		.get(tests.read)
		.put(tests.update)
		.delete(tests.delete);

	// Finish by binding the Test middleware
	app.param('testId', tests.testByID);
};