'use strict';

//Setting up route
angular.module('projects').config(['$stateProvider',
	function($stateProvider) {
		// Projects state routing
		$stateProvider.
		state('projects', {
			abstract: true,
			url: '/projects',
			template: '<ui-view/>'
		}).
		state('projects.list', {
			url: '',
			templateUrl: 'modules/projects/views/list-projects.client.view.html'
		}).
		state('projects.create', {
			url: '/create',
			templateUrl: 'modules/projects/views/create-project.client.view.html'
		}).
		state('projects.view', {
			url: '/:projectId',
			templateUrl: 'modules/projects/views/view-project.client.view.html'
		}).
		state('projects.edit', {
			url: '/:projectId/edit',
			templateUrl: 'modules/projects/views/edit-project.client.view.html'
		});
	}
]);