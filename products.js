'use strict';
(function(){

	var app = angular.module('store-products', []);


	app.directive('productTitle', function(){

		console.log("The product title directive is on");

		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
			//template: '<div>Some sample text here.</div>'

		};
		
	});
	
	app.directive('productPanels', function(){

		console.log("The product panels directive is on");

		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){

				console.log("The panel controller is on");

				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
				
			},
			controllerAs: 'panel'

		};
		
	});
	

})();