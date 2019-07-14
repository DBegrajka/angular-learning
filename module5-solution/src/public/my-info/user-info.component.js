(function () {
"use strict";

angular.module('public')
.component('userInfo', {
  templateUrl: 'src/public/my-info/user-info.html',
  bindings: {
    user: '<'
  }
});

})();
