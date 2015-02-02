angular.module('htm').controller('ContatosController', function ($scope) {
	
	$scope.count = 0;
	
	$scope.add = function () {
		$scope.count++;
	}
})