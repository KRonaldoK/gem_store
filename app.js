'use strict';

(function(){

	var gems = 
	[
	{
			name : 'Dodecahedron',
			price: 2.95,
			description: 'Dode description...',
			canPurchase: true,
			soldOut: false,
			images: 
			[
					{
						full: 'img/gem-01.gif',
						thumb:'img/gem-01.gif'
					},
					{
						full:'img/gem-02.gif',
						thumb:'img/gem-02.gif'
					}
			],
			reviews: 
			[
					{
						stars: 5,
						body: "I love this product",
						author: "joe@thomas.com"
					},
					{
						stars: 1,
						body: "This product sucks",
						author: "tim@hater.com"
					}
			]
	}, 
	{
			name : 'Pentagonal Gem',
			price: 5.95,
			description: 'Penta description...',
			canPurchase: true,
			soldOut: false,
			images: 
			[
					{
						full: 'img/gem-03.gif',
						thumb:'img/gem-03.gif'
					},
					{
						full:'img/gem-04.gif',
						thumb:'img/gem-04.gif'
					}
			],	
			reviews: 
			[
					{
						stars: 5,
						body: "I love this product",
						author: "joe@thomas.com"
					},
					{
						stars: 1,
						body: "This product sucks",
						author: "tim@hater.com"
					}
			]
	}
	];

	var app = angular.module('gemStore', ['store-products']);
	

	app.controller('StoreController', ['$http', function($http){
		
		console.log("The store controller is on");
		
		this.products = gems;
		/*
		var store = this;
		store.products = [];
		$http.get('/products').success(function(data){});
			store.products = data;
		*/
	}]);

	/*
	app.controller('PanelController', function(){
		
		
	});
	*/

	app.controller('ReviewController', function(){
		
		console.log("The review controller is on");
		
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};

	});
	
	
	app.config(function($logProvider){
    	$logProvider.debugEnabled(true);
	});

})();



