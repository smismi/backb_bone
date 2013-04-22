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

			var isDragging = false;
            $(this).on({
                "mousedown" : function(e){
                	console.log("mousedown " + $(this).attr("class"));
					isDragging = true;


					$(this).css({opacity: 0.4});
					$(this).clone().appendTo('#viewport').css({position: "absolute", border: "4px solid red", top: 130, left: 400});


                },
                "mousemove" : function(e){
					if (isDragging) {
						console.log("mmove");
					}
                },
                "mouseup" : function(e){
                    console.log("mup");
					isDragging = false;

				},
                "click" : function(e){
                    console.log("click");
					isDragging = false;
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

