App = {
    Models: {},
    Views: {},
    Collections: {}
};


_template = function (id) {
    return _.template($('#' + id).html());
};

__template = function (id) {
    return _.template("<div class=\"" + id + "\"> 12343<%=  =></div>");
};

$(function () {

    App.Models.Task = Backbone.Model.extend({});

    App.Views.Task = Backbone.View.extend({
        template: __template('taskTemplate'),
        initialize: function () {
//            this.render()
        },
        render: function () {
//            var template = this.template(this.model.toJSON());
            this.$el.html('1325');
            return this;
        },
        delete: function () {
        }
    });


    App.Views.TASKS = Backbone.View.extend({
        initialize: function () {

        },
        render: function () {
            this.collection.each(
                function (item) {
                    this.$el.append(task.render().el);
                }, this
            )
            return this;
        }
    });


    App.Collections.Tasks = Backbone.Collection.extend({
        model: App.Models.Task
    });

    task = new App.Views.Task();
    tasks = new App.Collections.Tasks([
        {
            itemId: 1,
            title: "sex"
        },
        {
            itemId: 2,
            title: "drugs"
        },
        {
            itemId: 3,
            title: "rockenroll"
        },
        {
            itemId: 3,
            title: "rockenroll"
        },
        {
            itemId: 3,
            title: "rockenroll"
        },
        {
            itemId: 3,
            title: "rockenroll"
        }
    ])


    TASKS = new App.Views.TASKS({collection: tasks})


    $('body').html(TASKS.render().el);


});


//init

$(function () {


});