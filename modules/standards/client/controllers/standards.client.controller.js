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
		$scope.find = function(search) {
			//$scope.standards = Standards.query();
			//search.minGrade = parseInt(search.minGrade, 10); //parseInt with radix
			//$scope.standards = Standards.query({minGrade:search.minGrade,maxGrade:search.maxGrade,subject:search.subject,searchText:search.searchText});
			
			if(!search.minGrade) search.minGrade = '0';
			if(!search.maxGrade) search.maxGrade = '912';

			if(search.searchText) {
				$scope.standards = Standards.query({benchmark:search.searchText});
			} else if(search.searchKeyword) {
				$scope.standards = Standards.query({keyword:search.searchKeyword});
			} else if(search.subject) {
				$scope.standards = Standards.query({minGrade:search.minGrade,maxGrade:search.maxGrade,subject:search.subject});
			} else {
				$scope.standards = Standards.query({minGrade:search.minGrade,maxGrade:search.maxGrade});
			}
			console.log(search);

		};

	    $scope.enterPressStandard = function(keyEvent, search, show) {
      		if(keyEvent.which === 13){
        		$scope.standards = Standards.query({benchmark:search.searchText});
        		$scope.show = true;
      		}
    	};

	    $scope.enterPressKeyword = function(keyEvent, search, show) {
	      if(keyEvent.which === 13){
	        $scope.standards = Standards.query({keyword:search.searchKeyword});
	        $scope.show = true;
	      }
	    };

		// Find existing Standard
		$scope.findOne = function() {
			$scope.standard = Standards.get({ 
				standardId: $stateParams.standardId
			});
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