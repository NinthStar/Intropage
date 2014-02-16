$(document).ready(function () {
	$("#logo").fadeTo(0, 0.5);
	$("#intro").fadeTo(0, 0);
	
	backgroundImageResize();
	$(window).bind("resize", backgroundImageResize);
	$("#logo").bind({"mouseenter" : logoOnEnter,
					 "mouseleave" : logoOnLeave});
});

function backgroundImageResize() {
	$("#top").css("width", 0);
	$("#background-img").css({"width"  : 0,
							  "height" : 0});
	
	var width = $(document).width(),
		prop = Math.max(1, width / 1024);
	
	$("#top").css("width", parseInt(prop * 1024) + "px");
	$("#background-img").css({"width"  : parseInt(prop * 1024) + "px",
							  "height" : parseInt(prop *  567) + "px"});
	$("#logo").css({"width"  : parseInt(prop * 250) + "px",
					"height" : parseInt(prop * 250) + "px",
					"top"    : parseInt(prop *  60) + "px",
					"left"   : (width - parseInt(prop * 250)) / 2 + "px"});
	$("#intro").css({"width" : parseInt(prop *  720) + "px",
					 "top"   : parseInt(prop * -180) + "px",
					 "left"  : (width - parseInt(prop * 720)) / 2 + "px"});
	$(".intro-elem p").css("margin-top", parseInt(prop * 30) + "px");
	$("#command-bar").css("margin-top", parseInt(prop * 0) + "px");
}

function logoOnEnter() {
	$("#background-img").stop().fadeTo(200, 0.7);
	$("#logo").stop().fadeTo(200, 1);
	$("#intro").stop().fadeTo(200, 1);
}
function logoOnLeave() {
	$("#background-img").stop().fadeTo(200, 1);
	$("#logo").stop().fadeTo(200, 0.5);
	$("#intro").stop().fadeTo(200, 0);
}
