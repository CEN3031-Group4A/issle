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
        state('support.about', {
            url: '/About',
            templateUrl: 'modules/support/views/about.client.view.html'
        });
	}
]);
