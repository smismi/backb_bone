




App.Views.Task = Backbone.View.extend({
	tagName: 'li',
	template: template('taskTemplate'),
	render: function () {
		var template = this.template(this.model.toJSON());
		this.$el.html( template );
		return this;
	},
	events:{
		'click .edit': 'editTask'
	},
	editTask: function  () {
		var newTaskTitle = prompt('Как переименуем задачу?', this.model.get('title'));
		this.model.set('title', newTaskTitle);
	}
});


App.Views.Tasks = Backbone.View.extend({
	tagName: 'ul',
	render: function() {
		this.collection.each(this.addOne, this);
		return this;
	},
	addOne: function(task) {
		// создавать новый дочерний вид
		var taskView = new App.Views.Task({ model: task });
		// добавлять его в корневой элемент
		this.$el.append(taskView.render().el);
	}
})

var tasksView = new App.Views.Tasks({ collection: tasksCollection});
