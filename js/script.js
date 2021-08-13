$( document ).ready(function() {

    // Hero Section FUll Height
    $(function(){
    	var windowH = $(window).height();
    	var wrapperH = $('.hero').height();
    	if(windowH > wrapperH) {                            
    		$('.hero').css({'height':($(window).height())+'px'});
    	}                                                                               
    	$(window).resize(function(){
    		var windowH = $(window).height();
    		var wrapperH = $('.hero').height();
    		var differenceH = windowH - wrapperH;
    		var newH = wrapperH + differenceH;
    		var truecontentH = $('#truecontent').height();
    		if(windowH > truecontentH) {
    			$('.hero').css('height', (newH)+'px');
    		}

    	})          
    });


});

$(document).bind('scroll',function(e){
    $('txtHover').each(function(){
        if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
            window.location.hash = $(this).attr('id');

            if($(this).attr('id') == "#about-me"){
                $("#navlist a").css('color', 'white');
                $("#nav1").css('color', 'red');
            }else if($(this).attr('id') == "#resume"){
                $("#navlist a").css('color', 'white');
                $("#nav2").css('color', 'red');
            }else if($(this).attr('id') == "third"){
                $("#navlist a").css('color', 'projects');
                $("#nav3").css('color', 'red');
            }

        }
    });
});