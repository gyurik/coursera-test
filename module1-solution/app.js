(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {

  $scope.ingredientList = "";
  $scope.totalValue = 0;
  $scope.message = "";

  $scope.separateIngredients = function () {

  $scope.calcIngedients = function() {
    var numberOfIngedients = calculateNumberOfIngredients(ingredientList);
    if ( numberOfIngedients === 0 ) {
      $scope.message = "Please enter data first";
    } else if ( numberOfIngedients <= 3 ) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
    };
  };


  function calculateNumberOfIngredients(string) {
    var list = string.split(",");
    return list.length;
  };

});


})();
