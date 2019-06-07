(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController',  LunchCheckController);
  LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkMenu = function () {
      var menu = $scope.lunchMenu;
      if(!menu){
        $scope.message = 'Please enter data first';
      }
      else{
        var arr = menu.split(',');
        if(arr.length > 3) {
          $scope.message = 'Too much!';
          
        }
        else{
          $scope.message = 'Enjoy!';
        }
      }
    };
  }
})();
