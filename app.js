var application =angular.module('myapp', []);

application.service('random', function(){
	var num= Math.floor(Math.random()*10);
	this.generate = function(){
		return num;

	};

});

application.controller('myController',function($scope, random){

	$scope.randomClick = function(){
		$scope.randomNumber = random.generate();
	};


});