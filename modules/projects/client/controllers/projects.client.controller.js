'use strict';
// Projects controller
angular.module('projects').controller('ProjectsController', ['$scope', '$stateParams', '$sce', '$location', 'Authentication', 'Projects', 'linkify',
	function($scope, $stateParams, $sce, $location, Authentication, Projects, linkify) {
		$scope.authentication = Authentication;

		// Create new Project
		$scope.create = function() {
			// Create new Project object
			//if((this.essentialDetails && essentialDetails.litDetails.standards) || (this.essentialDetails && this.essentialDetails.mathDetails.standards) || (this.essentialDetails && essentialDetails.scienceDetails.standards) || (this.essentialDetails && essentialDetails.ssDetails.standards)){ 
			this.essentialDetails.overallStandards = this.essentialDetails.litDetails.standards + ',' + this.essentialDetails.mathDetails.standards + ',' + this.essentialDetails.scienceDetails.standards + ',' + this.essentialDetails.ssDetails.standards;
			//} 
			//else{
				//this.essentialDetails.overallStandards = '';
			//}
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
            console.log('In $scope.update');
            this.essentialDetails.overallStandards = this.essentialDetails.litDetails.standards + ',' + this.essentialDetails.mathDetails.standards + ',' + this.essentialDetails.scienceDetails.standards + ',' + this.essentialDetails.ssDetails.standards;
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

		$scope.linkify = function(link) {
			return $sce.trustAsHtml(linkify.normal(link));
		} 
/*	-------------------------------------Star Rating Stuff-------------------------------------- */
		
		/*	
			TODO (IMPORTANT!!): Find a way to pull this particular user's previous rating from the
			schema's ratings field (which holds an array of userID-Rating pairs) and use it as the
			initial rating, instead of 0.
		*/



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
		$scope.getMyRating = function(){

			if ($scope.project.rating && $scope.project.rating.ratings ){
				var rater = $scope.project.rating.ratings.filter(isRater)[0];
				console.log(rater);
				if (typeof rater === 'undefined'){
					$scope.rating = 0;	//current rating
					return 'You haven\'t yet rated this project. Give it a couple of stars?';
				}
				$scope.rating = rater.num;
				$scope.reset_hover();
				return ('Your currently rate this project at ' + rater.num + ' stars');
			}
			$scope.rating = 0;	//current rating
			return 'This project has not yet been rated. Give it a couple of stars?';

		}; 

        // Function to find the current rater
        var isRater = function(value){
			return value.reviewer === $scope.authentication.user._id;
        };

		//Changes the user's rating of the project
		$scope.rate = function(){
			console.log('In $scope.rate');
			if(!$scope.project.rating){
				$scope.project.rating = {
					ratings : [
						{
							num: $scope.rating,
							reviewer: $scope.authentication.user._id
						}
					],
					avg_rating : $scope.rating
				};
			} else {
                var rater = $scope.project.rating.ratings.filter(isRater)[0];
                var length = $scope.project.rating.ratings.length;
				var rateToRemove = 0;

                var newLength = length + 1;

                if(length === 0)
                {
                    $scope.project.rating.avg_rating = 0;
                }

				if(typeof rater !== 'undefined') {
                    rateToRemove = rater.num;
                    var rateIndex = $scope.project.rating.ratings.indexOf(rater);
                    $scope.project.rating.ratings.splice(rateIndex, 1);
                    newLength -= 1;
                }

				$scope.project.rating.avg_rating = ($scope.project.rating.avg_rating * length + $scope.rating - rateToRemove)/(newLength);

				$scope.project.rating.ratings.push({
						num: $scope.rating,
						reviewer: $scope.authentication.user._id
				});
			}
			$scope.update();


		};  

		
		
	}
]);