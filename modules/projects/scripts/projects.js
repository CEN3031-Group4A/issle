$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});

function ShoppingListCtrl($scope) {
    $scope.shoppingList = [
      {
      "text": "Mathematics",
      "isTrue": false
      }, 
      {
      "text": "Science",
      "isTrue": false
      },
      {
      "text": "Literature",
      "isTrue": false
      },
      {
      "text": "Social Studies",
      "isTrue": false
      }
      
   ];
};