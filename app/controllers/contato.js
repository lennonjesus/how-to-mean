module.exports = function (app) {

	var contatos = [
		{id: 1, nome: 'Mamba Negra', email: 'mambanegra@gmail.com'},
		{id: 2, nome: 'Natasha', email: 'naty@gmail.com'},
		{id: 3, nome: 'Mercedes', email: 'mercedes@gmail.com'}
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