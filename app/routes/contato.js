module.exports = function (app) {
	var controller = app.controllers.contato;
	
	app.route('/contatos').get(controller.all);
	app.route('/contatos/:id').get(controller.get);
}