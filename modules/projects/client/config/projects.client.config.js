'use strict';

// Configuring the Projects module
angular.module('projects').run(['Menus',
	function(Menus) {
		// Add the Projects dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Projects',
			state: 'projects',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'projects', {
			title: 'Search for Projects',
			state: 'projects.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'projects', {
			title: 'Create Project',
			state: 'projects.create'
		});
	}
]);
