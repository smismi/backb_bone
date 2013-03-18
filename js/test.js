//model
var Cat = Backbone.Model.extend({
    defaults: {
        legs:   4,
        head:   1,
        name:   'barsik',
        color:  'white'
    },
    render: function(model) {
        console.log(model)
    }
});

ryzhiy = new Cat({
    color: 'black',
    name: 'ryzhiy'
});



//view
var CatView = Backbone.View.extend({
    tagName: "li",
    class : "cat_item",
    initialize: function(){
        this.render();
    },
    render: function() {

        $("#main").append(this.$el.html("name " + this.model.get("name")))
    }
});

var ryzhiyView = new CatView({
    model: ryzhiy
})


