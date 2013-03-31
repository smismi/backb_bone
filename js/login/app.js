App = {
   Models : {},
   Views : {},
   Collections: {}
}

template = function(id) {
    return _.template( $('#' + id).html() );
};

//models

App.Story.model = Backbone.Model.extend({
//    default: {
//        title: "новая новость",
//        url: "http://ya.ru",
//        importance: false
//    }
})


