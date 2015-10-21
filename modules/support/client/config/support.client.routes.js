'use strict';

//Setting up route
angular.module('supports').config(['$stateProvider',
	function($stateProvider) {
		// Supports state routing
		$stateProvider.
		state('support', {
			abstract: true,
			url: '/support',
			template: '<ui-view/>'
		}).
		state('support.faq', {
			url: '/FAQ',
			templateUrl: 'modules/support/views/faq.client.view.html'
		}).
			state('support.examples', {
			url: '/examples',
			templateUrl: 'modules/support/views/examples.client.view.html'
		}).
        state('support.about', {
            url: '/About',
            templateUrl: 'modules/support/views/about.client.view.html'
        });
        state('support.example1', {
            url: '/About',
            templateUrl: 'modules/support/views/example1.client.view.html'
        });
        state('support.example2', {
            url: '/About',
            templateUrl: 'modules/support/views/example2.client.view.html'
        });
        state('support.example3', {
            url: '/About',
            templateUrl: 'modules/support/views/example3.client.view.html'
        });
	}
]);
