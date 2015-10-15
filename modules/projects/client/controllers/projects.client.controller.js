'use strict';

// Projects controller
angular.module('projects').controller('ProjectsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Projects',
	function($scope, $stateParams, $location, Authentication, Projects ) {
		$scope.authentication = Authentication;

		// Create new Project
		$scope.create = function() {
			// Create new Project object
			var project = new Projects ({
				name: this.name,
				created: this.created,
				user: this.user,
				grades: this.grades,
				ask: this.ask,
				imagine: this.imagine,
				essentialDetails: this.essentialDetails
			});

			// Redirect after save
			project.$save(function(response) {
				$location.path('projects/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Project
		$scope.remove = function( project ) {
			if ( project ) { project.$remove();

				for (var i in $scope.projects ) {
					if ($scope.projects [i] === project ) {
						$scope.projects.splice(i, 1);
					}
				}
			} else {
				$scope.project.$remove(function() {
					$location.path('projects');
				});
			}
		};

		// Update existing Project
		$scope.update = function() {
			var project = $scope.project ;

			project.$update(function() {
				$location.path('projects/' + project._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

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
		
		
		//This is list-projects stuff now:
		
		$scope.grades = [
			{
				num: 12,
				name: "12th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 11,
				name: "11th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 10,
				name: "10th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 9,
				name: "9th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 8,
				name: "8th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 7,
				name: "7th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 6,
				name: "6th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 5,
				name: "5th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 4,
				name: "4th Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 3,
				name: "3rd Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 2,
				name: "2nd Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 1,
				name: "1st Grade",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			{
				num: 0,
				name: "Kindergarden",
				checkbox: "glyphicon glyphicon-unchecked",
				include: false,
			},
			
		];
		
		$scope.included_grades = [];
		$scope.min_grade = null;	//no narrowing down yet
		$scope.max_grade = null;
		
		//This whole method's buggy as hell. Will need to fix.
		$scope.toggle_include_grade = function(item){
			item.include = !item.include;	//toggle include
			if(item.include){	//wasn't included, now should be
				$scope.included_grades.push(item.num);
				item.checkbox = "glyphicon glyphicon-check"
			} else {			//was included, now shouldn't be
				var index = $scope.included_grades.indexOf(item.num);
    			$scope.included_grades.splice(index, 1);
				item.checkbox = "glyphicon glyphicon-unchecked"
			};
			
			$scope.min_grade = Math.min.apply(null, $scope.included_grades);
			$scope.max_grade = Math.max.apply(null, $scope.included_grades);
			
			if($scope.included_grades.length == 0) {
				$scope.max_grade = 0
				$scope.min_grade = 0;
			}
			
		};
		
		$scope.show_grades = false;
		$scope.toggle_show_grades = function(){
			$scope.show_grades = true;
		};
		
		$scope.categories = [
			//Will hold any topics specified
		];
		
		$scope.add_category = function(){
			$scope.categories.push(
		        {
		          
		        });
		};
	}
]);
