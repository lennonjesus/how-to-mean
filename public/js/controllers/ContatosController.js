angular.module('htm').controller('ContatosController', function ($scope) {
	
	$scope.count = 0;
	
	$scope.add = function () {
		$scope.count++;
	}


	$scope.contatos = [
		{id: 1, nome: 'Lennon Jesus', email: 'lennon.jesus@gmail.com'},
		{id: 2, nome: 'Carla Vidal', email: 'carlavoliveira@gmail.com'}
	];

	$scope.filtro = '';

})