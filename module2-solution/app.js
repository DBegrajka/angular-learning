(function () {
  'use strict';

  var buyList = [
	{ name: "Sugary Drinks", quantity: 5 },
	{ name: "cookies", quantity: 10 },
	{ name: "Pepto Bismol", quantity: 4 },
	{ name: "Chocolate", quantity: 2 },
	{ name: "chips", quantity: 8 }
];

var boughtList = [];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);;

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      var BuyCtrl = this;
      BuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();
      BuyCtrl.bought = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var BoughtCtrl = this;
    BoughtCtrl.items = ShoppingListCheckOffService.getAlreadyBougthItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = buyList;
    var boughtItems = boughtList;

    service.buyItem = function (indexItem) {
      var item =  toBuyItems[indexItem];
	    service.addBoughtItem(item);
      removeFromItemsToBuy(indexItem);
  };

  service.getItemsToBuy = function () {
    return toBuyItems;
  };

  service.getAlreadyBougthItems = function () {
    return boughtItems;
  };

  service.addBoughtItem = function (item) {
    boughtItems.push(item);
  };

  function removeFromItemsToBuy(indexItem) {
    toBuyItems.splice(indexItem, 1);
  };
  }

})();
