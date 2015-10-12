'use strict';

//Setting up route
angular.module('supports').config(['$stateProvider',
	function($stateProvider) {
		// Supports state routing
		$stateProvider.
		state('faq', {
			url: '/FAQ',
			templateUrl: 'modules/support/views/faq.client.view.html'
		}).
        state('about', {
            url: '/About',
            templateUrl: 'modules/support/views/about.client.view.html'
        });
	}
]);
