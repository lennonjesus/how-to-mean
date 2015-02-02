module.exports = function (app) {

	var contatos = [
		{_id: 1, nome: 'Lennon Jesus', email: 'lennon.jesus@gmail.com'},
		{_id: 2, nome: 'Carla Vidal', email: 'carlavoliveira@gmail.com'}
	]

	var controller = {};
	
	controller.all = function (req, res) {
		res.json(contatos);
	}
	
	controller.get = function (req, res) {
		
		var id = req.params.id;
		
		var contato = contatos.filter(function (contato) {
			return contato._id == id
		})[0];
		
		contato ? res.json(contato) : res.status(404).send('Contato nao encontrado.')
		
		
	}
	
	return controller;
	
}