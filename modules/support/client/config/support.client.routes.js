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
        state('support.example', {
            url: '/example',
            templateUrl: 'modules/support/views/example.client.view.html'
        }).
		state('support.examples', {
			url: '/examples',
			templateUrl: 'modules/support/views/examples.client.view.html'
		}).
        state('support.about', {
            url: '/About',
            templateUrl: 'modules/support/views/about.client.view.html'
        }).
        state('support.example1', {
            url: '/example1',
            templateUrl: 'modules/support/views/example1.client.view.html'
        }).
        state('support.example2', {
            url: '/example2',
            templateUrl: 'modules/support/views/example2.client.view.html'
        }).
        state('support.example3', {
            url: '/example3',
            templateUrl: 'modules/support/views/example3.client.view.html'
        }).
        state('support.example4', {
            url: '/example4',
            templateUrl: 'modules/support/views/example4.client.view.html'
        }).
        state('support.example5', {
            url: '/example5',
            templateUrl: 'modules/support/views/example5.client.view.html'
        }).
        state('support.example6', {
            url: '/example6',
            templateUrl: 'modules/support/views/example6.client.view.html'
        });
	}
]);
