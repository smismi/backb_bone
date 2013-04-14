
//VIEWS

TL.Views.Item = Backbone.View.extend({
    initialize: function() {
//        console.log("TL.Views.Item: initialize");
        this.render().colorize().bind();
    },
    render: function() {
//        console.log("TL.Views.Item: render");


        return this;
    },
    colorize: function() {
//        console.log("TL.Views.Item: colorize");


        return this;
    },
    bind: function() {
//        console.log("TL.Views.Item: bind");


        return this;
    }
});


TL.Views.Items = Backbone.View.extend({
    initialize: function() {
//        console.log("4");

//        console.log("TL.Views.Items: initialize");
        this.render().fullStop().alertTime();
    },
    render: function() {
        this.collection.each(function(item){

            this.renderEach(item);

        }, this);

        return this;
    },
    renderEach: function(item) {
//        console.log("TL.Views.Items: render each");
//        console.log(item.get("_id"));
//        item.get("_idw")
        var _item = new TL.Views.Item({model: item})
    },
    fullStop: function() {
        TL._stop = new Date();
        return this;
    },
    alertTime: function() {
        document.write(TL._stop - TL._start);
        return this;
    }
})





