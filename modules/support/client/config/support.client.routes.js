'use strict';

//Setting up route
angular.module('support').config(['$stateProvider',
	function($stateProvider) {
		// Supports state routing
		$stateProvider.
		state('support', {
			url: '/support',
			templateUrl: 'modules/support/views/support.client.view.html'
		});
	}
]);
