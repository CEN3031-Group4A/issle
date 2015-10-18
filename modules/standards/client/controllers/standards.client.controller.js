'use strict';

// Standards controller
angular.module('standards').controller('StandardsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Standards',
	function($scope, $stateParams, $location, Authentication, Standards ) {
		$scope.authentication = Authentication;

		// Create new Standard
		$scope.create = function() {
			// Create new Standard object
			var standard = new Standards ({
				benchmark: this.benchmark,
				description: this.description,
				subject: this.subject,
				grade: this.grade,
				bodyOfKnowledge: this.bodyOfKnowledge
			});

			// Redirect after save
			standard.$save(function(response) {
				$location.path('standards/' + response._id);

				// Clear form fields
				$scope.benchmark = '';
				$scope.description = '';
				$scope.subject = '';
				$scope.grade = '';
				$scope.bodyOfKnowledge = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Standard
		$scope.remove = function( standard ) {
			if ( standard ) { standard.$remove();

				for (var i in $scope.standards ) {
					if ($scope.standards [i] === standard ) {
						$scope.standards.splice(i, 1);
					}
				}
			} else {
				$scope.standard.$remove(function() {
					$location.path('standards');
				});
			}
		};

		// Update existing Standard
		$scope.update = function() {
			var standard = $scope.standard ;

			standard.$update(function() {
				$location.path('standards/' + standard._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Standards
		$scope.find = function() {
			$scope.standards = Standards.query();
		};

		// Find existing Standard
		$scope.findOne = function() {
			$scope.standard = Standards.get({ 
				standardId: $stateParams.standardId
			});
		};

	$scope.grades = [
			{
				num: 12,
				name: '12th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 11,
				name: '11th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 10,
				name: '10th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 9,
				name: '9th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 8,
				name: '8th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 7,
				name: '7th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 6,
				name: '6th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 5,
				name: '5th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 4,
				name: '4th Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 3,
				name: '3rd Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 2,
				name: '2nd Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 1,
				name: '1st Grade',
				checkbox: 'glyphicon glyphicon-unchecked',
				include: false,
			},
			{
				num: 0,
				name: 'Kindergarden',
				checkbox: 'glyphicon glyphicon-unchecked',
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