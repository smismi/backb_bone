(function($){

    $.fn.draggable2 = function(options){

        defaults = {
            disable:    false,
            move:       null,
            start:      null,
            stop:       null
        }

        var options = $.extend(defaults, options);


//        _this = this;

//        init(_this);

        return this.each( function() {


            $(this).on({
                "mousedown" : function(e){
                console.log("mousedown " + $(this).attr("class"));

                },
                "mousemove" : function(e){
                    console.log("mmove");

                },
                "mouseup" : function(e){
                    console.log("mup");

                },
                "click" : function(e){
                    console.log("click");

                }
            });





        })


//        function init(obj) {
//
//
//
//
//            console.log(obj);
//
//
//
//
//        }


    }

})(jQuery);

