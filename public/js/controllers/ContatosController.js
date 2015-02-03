angular.module('htm').controller('ContatosController', function ($scope, $http) {
	
	$scope.filtro = '';

	$scope.count = 0;

	$http.get('/contatos')
		.success(function(data) {
			$scope.contatos = data;
		})
		.error(function(statusText){
			console.log(statusText);
		});

})