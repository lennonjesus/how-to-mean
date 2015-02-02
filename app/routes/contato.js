module.exports = function (app) {
	var controller = app.controllers.contato;
	
	app.get('/contatos', controller.all);
	app.get('/contatos/:id', controller.get);
}