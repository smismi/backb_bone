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
        var spanEdit = $("<span></span>").addClass("edit").text('edit')
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
        this.$el.css("background", "#f00")
    },
    events: {
        "keydown #search_text" : "search"
    },
    search: function(e) {
        console.log ("1")
    }
})


//collections
PL.Collections.Playlist = Backbone.Collection.extend({model: PL.Models.Track});

var playlist = new PL.Collections.Playlist([
    {
        trackTitle: "1",
        trackId: 0

    },
    {
        trackTitle: "2",
        trackId: 1

    },
    {
        trackTitle: "3",
        trackId: 2

    },
    {
        trackTitle: "4",
        trackId: 3

    },
    {
        trackTitle: "5",
        trackId: 4

    },
    {
        trackTitle: "5",
        trackId: 4

    },
    {
        trackTitle: "5",
        trackId: 4

    },
    {
        trackTitle: "5",
        trackId: 4

    },
    {
        trackTitle: "5",
        trackId: 4

    }
]);



var track = new PL.Views.Track({
    model:trackModel
})

var winamp = new  PL.Views.Tracks({
    collection: playlist
})

var search = new PL.Views.Search({})


