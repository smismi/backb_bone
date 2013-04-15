var PL = {
    Models: {},
    Views: {},
    Collections: {}
};

//Models
PL.Models.Track = Backbone.Model.extend({
    defaults: {
        trackId: "undefined",
        trackTitle: "Untitled Song"
    },
    initialize : function () {
        console.log("init mOdel")
    }
});


var trackModel = new PL.Models.Track({})


//Views

PL.Views.Track = Backbone.View.extend({
    initialize : function () {
        this.render();
    },
    render: function(){
//        console.log()
        var spanEdit = $("<span/>").addClass("edit").text('edit')
        this.$el.append(this.model.get("trackTitle")).append(spanEdit);
        return this;
    },
    events: {
        "click .edit": 'colorize'
    },
    colorize: function() {
        this.$el.css({
            color: "#f00"
        })
    }
});

PL.Views.Tracks = Backbone.View.extend({
    tagName: "p",
    initialize : function(){
        this.render();

    },
    render: function() {
        this.collection.each(
            function(trackModel) {
                var _track = new PL.Views.Track({
                    model: trackModel
                })
                this.$el.append(_track.$el);
            }, this
        )
        console.log("1234568");
        $("#playlist").html(this.$el);
    }
});

PL.Views.Search = Backbone.View.extend({
    el: "#search_form",
    initialize : function(){
        this.$el.css("background", "#f00");
        var input = $("#search_text");
    },
    events: {
        "keyup #search_text" : "search"
    },
    search: function(e) {
//        this.findSubstring($("#search_text").val());
        this.find();
    },

    find: function () {
        var found = this.collection.find(function(item){
//            debugger;
            return (item.get('trackTitle')) === $("#search_text").val();
//            return ( item.get('trackTitle').indexOf($("#search_text").val()));
        });
        this.filter(found);


    },

    findSubstring: function(s) {
        var _s = s;
//
//        var _f = _.filter(model, function(num){ return num % 2 == 0; });
//        => [2, 4, 6]



        this.collection.each(
            function(model, index, _s) {
                console.log(_s);
                str = model.get("trackTitle");
                if(!str.indexOf(_s)) this.hide(model);
            }, this
        )
    },
    filter: function(model){
       console.log(model.get("trackTitle"));
    }

})


//collections
PL.Collections.Playlist = Backbone.Collection.extend({model: PL.Models.Track});

var playlist = new PL.Collections.Playlist([
    {
        trackTitle: "anna",
        trackId: 0

    },
    {
        trackTitle: "foxie",
        trackId: 1

    },
    {
        trackTitle: "kathie",
        trackId: 2

    },
    {
        trackTitle: "gresden",
        trackId: 3

    },
    {
        trackTitle: "new your city",
        trackId: 4

    },
    {
        trackTitle: "mexico",
        trackId: 5

    },
    {
        trackTitle: "putinhui",
        trackId: 6

    },
    {
        trackTitle: "ferdinand",
        trackId: 7

    },
    {
        trackTitle: "green",
        trackId: 8

    }
]);



var track = new PL.Views.Track({
    model:trackModel
})

var winamp = new  PL.Views.Tracks({
    collection: playlist
})

var search = new PL.Views.Search({
    collection: playlist
})


