var TL = {
    Models: {},
    Views: {},
    Collections: {},
    _start: 0,
    _stop: 0
}


TL._start = new Date();
//console.log("1");


$(document).ready(function(){


	$(".xml_button").on("click", function(){

//	   alert("sasva")
		$.get('data.xml', function(xml){
			var json = $.xml2json(xml);
			alert(json.message);
		});
	})


})