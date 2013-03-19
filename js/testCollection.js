////collection
//var testCollection = Backbone.Collection.extend({
//	defaults: {
//		model: Client
//	},
//	model: Client,
//	url: '../data/data.json'
//});



App.Collections.Task = Backbone.Collection.extend({
	model: App.Models.Task
});


window.tasksCollection = new App.Collections.Task([
	{
		title: 'Сходить в магазин',
		priority: 4
	},
	{
		title: 'Получить почту',
		priority: 3
	},
	{
		title: 'Сходить на работу',
		priority: 5
	},
]);
