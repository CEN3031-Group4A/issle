'use strict';

// Configuring the Supports module
angular.module('supports').run(['Menus',
	function(Menus) {
		// Add the Supports dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Support',
			state: 'support',
			type: 'dropdown'
		});

        Menus.addSubMenuItem('topbar', 'support', {
            title: 'Example',

            state: 'support.example'
        });

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'support', {
			title: 'FAQ',
			state: 'support.faq'
		});

        // Add the dropdown list item
        Menus.addSubMenuItem('topbar', 'support', {
            title: 'About Us',
            state: 'support.about'
        });


	}
]);
