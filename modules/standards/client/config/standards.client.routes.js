'use strict';

//Setting up route
angular.module('standards').config(['$stateProvider',
	function($stateProvider) {
		// Standards state routing
		$stateProvider.
		state('standards', {
			abstract: true,
			url: '/standards',
			template: '<ui-view/>'
		}).
		state('standards.list', {
			url: '',
			templateUrl: 'modules/standards/views/list-standards.client.view.html'
		}).
		state('standards.view', {
			url: '/:standardId',
			templateUrl: 'modules/standards/views/view-standard.client.view.html'
		});
	}
]);