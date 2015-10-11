'use strict';

// Configuring the Supports module
angular.module('support').run(['Menus',
	function(Menus) {
		// Add the Supports dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Support',
			state: 'support',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'support', {
			title: 'Support Page',
			state: 'support'
		});
	}
]);
