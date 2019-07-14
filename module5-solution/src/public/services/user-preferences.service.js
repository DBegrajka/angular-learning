(function() {
"use strict";

angular.module('common')
.service('UserPreferencesService', UserPreferencesService);

function UserPreferencesService() {
  var service = this;
  var _preferences = null;

  /**
   * Load the current user an item preferences
   */
  service.savePreferences = function(menuItem, user) {
    _preferences = new Object();
    _preferences.menuItem = menuItem;
    _preferences.user = user;
    //console.log(_preferences);
  };


  service.getPreferences = function() {
    return _preferences;
  };

  service.getUser = function() {
    return _preferences.user;
  };

   service.getMenuItem = function() {
    return _preferences.menuItem;
  };

}


})();
