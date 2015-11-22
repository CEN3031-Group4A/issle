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
				status: this.status,
				isPublic: this.isPublic,
				minGrade: this.minGrade,
				maxGrade: this.maxGrade,
				ask: this.ask,
				imagine: this.imagine,
				essentialDetails: this.essentialDetails,
				rating: null
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
			var project = $scope.project;

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
/*	-------------------------------------Star Rating Stuff-------------------------------------- */
		
		/*	
			TO-DO (IMPORTANT!!): Find a way to pull this particular user's previous rating from the 
			schema's ratings field (which holds an array of userID-Rating pairs) and use it as the
			initial rating, instead of 0.
		*/

		$scope.rating = 0;	//current rating

		//an array containing the name of the glyphicon to use for each star
		$scope.glyphs = new Array(
			'gold glyphicon glyphicon-star-empty',
			'gold glyphicon glyphicon-star-empty',
			'gold glyphicon glyphicon-star-empty',
			'gold glyphicon glyphicon-star-empty',
			'gold glyphicon glyphicon-star-empty'
		);

		/*	
			Runs when a star glyphicon is hovered into. It sets all the stars up to the current one
			to have the filled-in star glyphicon.
		*/
		$scope.rating_hover = function(num){
			for(var i = 0; i < num; i++){
				$scope.glyphs[i] = 'gold glyphicon glyphicon-star';
			}
			for(i = num; i < 5; i++){
				$scope.glyphs[i] = 'gold glyphicon glyphicon-star-empty';
			}
		}; 
			
		//Runs when a star glyphicon is hovered out of. Resets the  stars' highlighing to the current rating
		$scope.reset_hover = function(){
			$scope.rating_hover($scope.rating);
		}; 

		//Prints out user's current rating of the project
		$scope.getMyRating = function(ratings_arr, id){
			for(var i = 0; i < ratings_arr.length; i++){
				if(ratings_arr[i].reviewer === id){
					return ('Your currently rate this project at' + ratings_arr[i].num + ' stars');
				}
			}
			return 'You haven\'t yet rated this project. Give it a couple of stars?';
		}; 

		//Changes the user's rating of the project
		$scope.rate = function(id){
			if(!$scope.project.rating){
				$scope.project.rating = {
					ratings : [
						{
							num: $scope.rating,
							reviewer: id
						}
					],
					avg_rating : $scope.rating
				};
			} else {

				var rateIndex = $scope.project.rating.ratings.indexOf({reviewer: id});
				var rateToRemove = 0;
				if(rateIndex !== -1)
				{
					rateToRemove = $scope.project.rating.ratings[rateIndex].num;
					$scope.project.rating.ratings.splice(rateIndex, 1);
				}
				var length = $scope.project.rating.ratings.length;

				$scope.project.rating.avg_rating = ($scope.project.rating.avg_rating * length + $scope.rating - rateToRemove)/(length + 1);

				$scope.project.rating.ratings.push({
						num: $scope.rating,
						reviewer: id
				});
			}

			$scope.update();

		};  

		
		
	}
]);
