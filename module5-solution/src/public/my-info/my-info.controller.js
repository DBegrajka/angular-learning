(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['preferences'];
function MyInfoController(preferences) {
  var $myInfoCtrl = this;
  $myInfoCtrl.preferences = preferences;
}

})();