App = {
    Models: {},
    Views: {},
    Collections: {}
}

template = function (id) {
    return _.template($('#' + id).html());
};

//models

App.Models.Story = Backbone.Model.extend({
//    default: {
//        title: "новая новость",
//        url: "http://ya.ru",
//        importance: false
//    }
});

App.Views.Story = Backbone.View.extend({
    template: _.template('<strong>123</strong>'),
//    template: _.template('<strong><%= id %></strong> - <a href=\"<%= url %>\"><%= title %> </a>'),
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

App.Views.Stories = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.collection.each(function (story) {
//                var personView = new PersonView({model: person});
            var _story = new App.Views.Story({model: story });
//            this.$el.append(_story.render().el);
            console.log(_story)
        }, this);
        return this;
    }
});

story = new App.Models.Story({});


App.Collections.Stories = Backbone.Collection.extend({
    model: App.Models.Story
})


App.collectionStories = new App.Collections.Stories(
    [{
        'id': 0,
        title: "новая новость",
        url: "http://ya.ru",
        importance: false
    },
    {
        'id': 1,
        title: "hi ya novost",
        url: "http://sex.ru",
        importance: false
    }]
);
viewStories = new App.Views.Stories({collection: App.collectionStories})

$('body').html(viewStories.render().el);
