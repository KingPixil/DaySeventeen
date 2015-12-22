var quotes = ["Don't cry because it's over, smile because it happened.@Dr. Seuss", "Be yourself; everyone else is already taken.@Oscar Wilde", "No one can make you feel inferior without your consent.@Eleanor Roosevelt", "If you tell the truth, you don't have to remember anything.@Mark Twain", "Always forgive your enemies; nothing annoys them so much.@Oscar Wilde", "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.@Bil Keane", "I love deadlines. I love the whooshing noise they make as they go by.@Douglas Adams"];

randomNum = 0;

$("button").click(function() {
  generateQuote();
  generateGradient();
});

var generateQuote = function() {
  randomNum = Math.floor((Math.random() * quotes.length) + 1);
  var quote = quotes[randomNum].split("@");
  $(".quote").html(quote[0]);
  $(".author").html(quote[1]);
};

$(document).ready(function() {
  generateQuote();
  generateGradient();
});


// Random Background gradient
// Define variable colors
var generateGradient = function() {
	var back = ["#22A7F0","#8E44AD","#AEA8D3","#F62459","#DB0A5B","#D64541","#D2527F","#2C3E50","#1E8BC3","#87D37C","#4ECDC4","#3FC380","#E87E04","#F9690E","#F9BF3B"];
	
	$('html').each(function() {
		
		// First random color
		var rand1 = back[Math.floor(Math.random() * back.length)];
		// Second random color
		var rand2 = back[Math.floor(Math.random() * back.length)];
		
		var grad = $("html");
		
		// Convert Hex color to RGB
		function convertHex(hex,opacity){
		    hex = hex.replace('#','');
		    r = parseInt(hex.substring(0,2), 16);
		    g = parseInt(hex.substring(2,4), 16);
		    b = parseInt(hex.substring(4,6), 16);
			
			// Add Opacity to RGB to obtain RGBA
		    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
		    return result;
		}
		
		// Gradient rules
		grad.css('background', convertHex(rand1,40) );
		grad.css("background", "-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+ convertHex(rand1,40) +"), color-stop(100%,"+ convertHex(rand2,40) +"))");
		grad.css("background", "-webkit-linear-gradient(top,  "+ convertHex(rand1,40) +" 0%,"+ convertHex(rand2,40) +" 100%)");
		grad.css("background", "-o-linear-gradient(top, "+ convertHex(rand1,40) +" 0%,"+ convertHex(rand2,40) +" 100%)");
		grad.css("background", "-ms-linear-gradient(top, "+ convertHex(rand1,40) +" 0%,"+ convertHex(rand2,40) +" 100%)");
		grad.css("background", "linear-gradient(to bottom, "+ convertHex(rand1,40) +" 0%,"+ convertHex(rand2,40) +" 100%)");
		grad.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='"+ convertHex(rand1,40) +"', endColorstr='"+ convertHex(rand2,40) +"',GradientType=0 )");
    grad.css("background-repeat", "no-repeat");
        
	});
  
};