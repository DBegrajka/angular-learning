(function () {

angular.module('MenuApp',['ui.router','Data'])
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
	})

	.state('categoriesState', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
	  controller: 'CategoriesController as categoriesCtrl',
	  resolve: {
		items: ['MenuDataService', function (MenuDataService) {
			var items = MenuDataService.getAllCategories();
			return items;

		}]
	  }
    })

	.state('itemsState', {
	  url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/items.template.html',
	  controller: 'ItemsController as itemsCtrl',
	  resolve: {
		items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            var items =  MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            return items;
        }]
	  }
    });
}


})();
