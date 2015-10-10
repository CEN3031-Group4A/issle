'use strict';

//Tests service used to communicate Tests REST endpoints
angular.module('tests').factory('Tests', ['$resource',
	function($resource) {
		return $resource('api/tests/:testId', { testId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);