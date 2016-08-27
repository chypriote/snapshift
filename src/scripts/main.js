$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName).removeClass('notVisible');
		});
	}
});
$.fn.extend({
	disanimateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName).addClass('notVisible');
		});
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() >= 500){
		$('.nav').addClass('scrolled');
	} else{
		$('.nav').removeClass('scrolled');
	}
});

var planning = new Waypoint({
	element: document.getElementById('users'),
	handler: function(direction) {
		if (direction == 'down') {
			$('.img-planning').animateCss('slideInRight');
			$('.img-contract').removeClass('notVisible');
		} else {
				$('.img-planning').disanimateCss('slideOutRight');
		}
	},
	offset: 400
});

var contract = new Waypoint({
	element: document.getElementById('presences'),
	handler: function(direction) {
		if (direction == 'down') {
			$('.img-contract').animateCss('zoomIn');
			$('.img-contract').removeClass('notVisible');
		} else {
			$('.img-contract').disanimateCss('zoomOut');
		}
	}
});
