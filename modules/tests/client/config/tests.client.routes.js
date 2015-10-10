'use strict';

//Setting up route
angular.module('tests').config(['$stateProvider',
	function($stateProvider) {
		// Tests state routing
		$stateProvider.
		state('tests', {
			abstract: true,
			url: '/tests',
			template: '<ui-view/>'
		}).
		state('tests.list', {
			url: '',
			templateUrl: 'modules/tests/views/list-tests.client.view.html'
		}).
		state('tests.create', {
			url: '/create',
			templateUrl: 'modules/tests/views/create-test.client.view.html'
		}).
		state('tests.view', {
			url: '/:testId',
			templateUrl: 'modules/tests/views/view-test.client.view.html'
		}).
		state('tests.edit', {
			url: '/:testId/edit',
			templateUrl: 'modules/tests/views/edit-test.client.view.html'
		});
	}
]);