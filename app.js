(function () {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
    $scope.name = 'Deepak';
    $scope.state = "hungry";
    $scope.sayHello = function () {
      return "Hello";
    };
    $scope.feedYakov = function (){
      $scope.state = "fed";
    };
  });
})();
