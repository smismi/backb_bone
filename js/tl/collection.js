
//COLLECTIONS

TL.Collections.Items = Backbone.Collection.extend({
    model: TL.Models.Item
})



//
//a = new TL.Collections.Items({
//    url: "D:/_projects/backb_bone/js/tl/data.json", success: function() {
//        console.log('123');
//    }
//});


//console.log("2");

//
//
//TL.Collections.Items = Backbone.Collection.extend(
//    {
//        model: TL.Models.Item,
//
//        url: "data.js",
//        parse: function(response)
//        {
//            return response.results;
//        }
//    });

var c_items = new TL.Collections.Items([
    {
        _id: 1,
        color: "#f00",
        className: "simple"
    },
    {
        _id: 2,
        color: "#0f0",
        className: "double"
    },
    {
        _id: 3,
        color: "#ff6",
        className: "triple"
    },
    {
        _id: 4,
        color: "#066",
        className: "simple"
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




