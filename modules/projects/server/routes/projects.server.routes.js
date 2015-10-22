'use strict';

module.exports = function(app) {
	var projects = require('../controllers/projects.server.controller');
	var projectsPolicy = require('../policies/projects.server.policy');

	// Projects Routes
	app.route('/api/projects').all()
		.get(projects.list).all(projectsPolicy.isAllowed)
		.post(projects.create);

	app.route('/api/projects/:projectId').all(projectsPolicy.isAllowed)
		.get(projects.read)
		.put(projects.update)
		.delete(projects.delete);

	// Finish by binding the Project middleware
	app.param('projectId', projects.projectByID);
};
