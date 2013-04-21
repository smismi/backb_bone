
//VIEWS

TL.Views.Item = Backbone.View.extend({
    tagName: "figure",
    template: _.template("<%= _id %>"),
    initialize: function() {
//        console.log("TL.Views.Item: initialize");
        this.render().colorize().bind();
    },
    render: function() {
//        console.log("TL.Views.Item: render");
//        var   ccclass = ;

        this.$el.addClass("tile_item " + (this.model.get("className") || "")).html( this.template( this.model.toJSON() ) )

        this.$el.append(this.buttons.close);
        console.log(c_items.length);
        return this;
    },
    colorize: function() {
//        console.log("TL.Views.Item: colorize");

        this.$el.css({"color": this.model.get("color") || "#f60"})
        return this;
    },
    close: function() {
//        alert("close" + this.model.get("_id"))


        this.$el.remove();
        c_items.remove(this.model);
        console.log(c_items.length);


    },
    buttons : {
        close: "<div class='close'>",
        active: "<div class='active'>"
    },
    events : {
        "click .close": "close"
    }

});


TL.Views.Items = Backbone.View.extend({
    initialize: function() {
//        console.log("4");

//        console.log("TL.Views.Items: initialize");
        this.render().fullStop().alertTime();
        this.collection.on("add", this.addOne, this);
    },
    addOne: function(item) {

        // создавать новый дочерний вид
        var _item = new TL.Views.Item({model: item});
//        var taskView = new App.Views.Task({ model: task });
        // добавлять его в корневой элемент

        this.$el.append(_item.render().el);
//        this.$el.append(taskView.render().el);
    },
    render: function() {
        this.collection.each(function(item){

            this.renderEach(item);

        }, this);
        $("#viewport").append(this.$el)

        return this;
    },
    renderEach: function(item) {
//        console.log("TL.Views.Items: render each");
//        console.log(item.get("_id"));
//        item.get("_idw")
        var _item = new TL.Views.Item({model: item});


        this.$el.append(_item.$el);


    },
    fullStop: function() {
        TL._stop = new Date();
        return this;
    },
    alertTime: function() {
//        document.write(TL._stop - TL._start);
        return this;
    }
})

TL.Views.Add = Backbone.View.extend({
    el: '#add_item',
    initialize: function(){
        console.log(this.$el)
    },
    events : {
        "click .add_button" : "add"
    },
    add: function (){
        var id_value = this.$el.find("input[name]").attr("value");

        var newTile = new TL.Models.Item({_id:90, color: id_value })
//        var newTask = new App.Models.Task({ title: newTaskTitle });
        c_items.add(newTile);
    }

});






