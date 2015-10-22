'use strict';

angular.module('users').controller('SettingsController', ['$scope', 'Authentication','Projects',
  function ($scope, Authentication, Projects){
    $scope.user = Authentication.user;

    $scope.getUserProjects = function(){
      Projects.query(
        {'userID' : $scope.user._id},
        function(projects) {
          $scope.userProjects = projects;
        }
    );}
  }
]);
