'use strict';

// Configuring the Tests module
angular.module('tests').run(['Menus',
	function(Menus) {
		// Add the Tests dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Tests',
			state: 'tests',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'tests', {
			title: 'List Tests',
			state: 'tests.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'tests', {
			title: 'Create Test',
			state: 'tests.create'
		});
	}
]);