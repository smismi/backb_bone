var TL = {
    Models: {},
    Views: {},
    Collections: {},
    _start: 0,
    _stop: 0
}

TL._start = new Date();
        console.log("1");

//MODELS

TL.Models.Item = Backbone.Model.extend();

var item = new TL.Models.Item;


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
        console.log("4");

        console.log("TL.Views.Items: initialize");
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
        console.log(item.get("_id"));
//        item.get("_idw")
        var _item = new TL.Views.Item({model: item})
    },
    fullStop: function() {
        TL._stop = new Date();
        return this;
    },
    alertTime: function() {
        console.log(TL._stop - TL._start);
        return this;
    }
})




//COLLECTIONS

TL.Collections.Items = Backbone.Collection.extend({
    model: TL.Models.Item
})
console.log("2");

var c_items = new TL.Collections.Items([
    {
        _id: 1,
        color: "#f00"
    },
    {
        _id: 2,
        color: "#0f0"
    },
    {
        _id: 3,
        color: "#ff6"
    },
    {
        _id: 4,
        color: "#066"
    },
    {
        _id: 5,
        color: "#6f0"
    },
    {
        _id: 6,
        color: "#0ff"
    },
    {
        _id: 7,
        color: "#00f"
    },
    {
        _id: 7,
        color: "#00f"
    },
    {
        _id: 7,
        color: "#00f"
    }
]);

console.log("3");

var v_items = new TL.Views.Items({
    collection: c_items
})





