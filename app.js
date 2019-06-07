(function () {
'use strict';
var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];
angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', '$filter', 'lovesFilter', '$timeout'];
function MsgController($scope, $filter, lovesFilter, $timeout) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;
$scope.onceCounter = 0;
$scope.counter = 0;
$scope.name = "deepak";
$scope.shoppingList1 = shoppingList1;
$scope.shoppingList2 = shoppingList2;

$scope.addToList = function () {
  var newItem = {
    name: $scope.newItemName,
    quantity: $scope.newItemQuantity
  };
  $scope.shoppingList2.push(newItem);
};

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };

  $scope.showNumberOfWatchers = function () {
    console.log("Number of watchers ", $scope.$$watchersCount);
  };
  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };
  $scope.upCounter = function (){
    $timeout(function (){
      $scope.counter++;
      console.log("counter incremented!");
    },2000);

  };

  // $scope.upCounter = function (){
  //   setTimeout(function (){
  //   $scope.counter++;
  //   console.log("counter incremented!");
  //   $scope.$digest();
  // }, 2000);
  //
  // };
  // $scope.upCounter = function (){
  //   setTimeout(function (){
  //   $scope.$apply(function () {
  //     $scope.counter++;
  //     console.log("counter incremented!");
  //   } );
  // }, 2000);
  //
  // };

   $scope.$watch(function () {
     console.log("Digest Loop Fired!")
   });
  // $scope.$watch('onceCounter', function (newValue, oldValue) {
  //   console.log("old value: ", oldValue);
  //   console.log("new value: ", newValue);
  // });
  //
  // $scope.$watch('counter', function (newValue, oldValue) {
  //   console.log("counter old value: ", oldValue);
  //   console.log("counter new value: ", newValue);
  // });
}



function LovesFilter(){
  return function (input) {
    input = input || "";
    input = input.toString().replace("likes","loves");
    return input;
  };
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.toString().replace(target,replace);
    return input;
  };
}

})();
