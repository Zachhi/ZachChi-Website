//hero image text help
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

//this is for changing colors on scroll. May not use tho
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

// this is for our terminal animation text
// function([string1, string2],target id,[color1,color2])    
consoleText([':)', 'Hi, I\'m Zach'], 
            'text',
            ['rgba(138, 255, 169, 1)', 'rgba(255, 255, 255, 1);']);

function consoleText(words, id, colors) {
  if (colors === undefined) 
    colors = ['#fff'];

  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  var typeSpeed = 160;

  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) 
    {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)

      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1) //after sentence is deleted, this is the amount of time to wait before typing again

    } 
    else if (letterCount === words[0].length + 1 && waiting === false && words[0] == 'Hi, I\'m Zach') 
    {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 20000000) //after sentence is typed, this is amount of time to wait before deleting
    } 
    else if (letterCount === words[0].length + 1 && waiting === false) 
    {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1) //after sentence is typed, this is amount of time to wait before deleting
    } 
    
    else if (waiting === false)
    {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }

  }, typeSpeed) //this is simply typing the word



  //this is for the console to blink on and off
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}




/*FOR BAR CHART*/

