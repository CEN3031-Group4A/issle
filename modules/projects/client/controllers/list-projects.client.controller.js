'use strict';

angular.module('projects').controller('list-ProjectsController' , ['$scope', '$stateParams', '$location', 'Authentication', 'Projects',
	function($scope, $stateParams, $location, Authentication, Projects ) {
	    $scope.authentication = Authentication;

	    // Find a list of Projects
		$scope.find = function(search) {
      //$scope.projects = Projects.query();  
      if(!search.minGrade) search.minGrade = '0';
      if(!search.maxGrade) search.maxGrade = '912';

      if(search.searchName){
        $scope.projects = Projects.query({projectName:search.searchName});
      } else if(search.searchText) {
        $scope.projects = Projects.query({benchmark:search.searchText});
      } else if(search.subject) {
        $scope.projects = Projects.query({minGrade:search.minGrade,maxGrade:search.maxGrade,subject:search.subject});
      } else {
        $scope.projects = Projects.query({minGrade:search.minGrade,maxGrade:search.maxGrade});
      }
      console.log(search);

    };

    $scope.enterPressName = function(keyEvent, search, show) {
      if(keyEvent.which === 13){
        $scope.projects = Projects.query({projectName:search.searchName});
        $scope.show = true;
      }
    };

    $scope.enterPressStandard = function(keyEvent, search, show) {
      if(keyEvent.which === 13){
        $scope.projects = Projects.query({benchmark:search.searchText});
        $scope.show = true;
      }
    };

		// Find existing Project
		$scope.findOne = function() {
			$scope.project = Projects.get({ 
				projectId: $stateParams.projectId
			});
		};
	}
]);
