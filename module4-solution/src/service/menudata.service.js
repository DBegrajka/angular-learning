(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

console.log(service);
  service.getAllCategories = function () {
	var promise = $http({
		method: "GET",
		url: (ApiBasePath + "/categories.json")
	})
	.then(function (response) {
		console.log("getAllCategories response:");
		return response.data;
	});
	return promise;
  };
  service.getItemsForCategory = function(categoryShortName) {
	var promise = $http({
		url: (ApiBasePath + "/menu_items.json"),
		method: "GET",
		params: {
			category: categoryShortName
		}
	})
	.then(function (response) {
		return response.data.menu_items;
	});
	return promise;
  };
}

})();
