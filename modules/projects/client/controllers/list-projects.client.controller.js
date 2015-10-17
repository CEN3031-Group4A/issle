'use strict';

angular.module('projects').controller('list-ProjectsController'['$scope', '$stateParams', '$location', 'Authentication', 'Projects',
	function($scope, $stateParams, $location, Authentication, Projects ) {
	    $scope.authentication = Authentication;

	    // Find a list of Projects
		$scope.find = function() {
			$scope.projects = Projects.query();
		};

		// Find existing Project
		$scope.findOne = function() {
			$scope.project = Projects.get({ 
				projectId: $stateParams.projectId
			});
		};
	}
]);

angular.module('projects').controller('DropdownCtrl', function ($scope, $log) {
      $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
      ];
    
      $scope.status = {
        isopen: false
      };
    
      $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
      };
    
      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };
});