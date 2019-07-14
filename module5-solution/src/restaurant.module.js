(function() {
"use strict";
// Restaurant module including public module as a dependency
angular.module('restaurant', ['public'])
.config(config);
config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // User goes to a path that doesn't exist, it will redirect to public root
  $urlRouterProvider.otherwise('/');
}

})();
