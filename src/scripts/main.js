var smController = new ScrollMagic.Controller();

/* Slide In Right Animation */
var transXAnimation = new TimelineMax()
	.to(".img-planning", 2, {x: "-75%"})
new ScrollMagic.Scene({
		duration: 700,
		triggerElement: '#hero .sub-title',
		triggerHook: "onLeave"
	})
	.setTween(transXAnimation)
	.addTo(smController)

/* Pop In Animation */
var popinAnimation = new TimelineMax()
	.to(".img-contract", 2, {scale: 1})


new ScrollMagic.Scene({
		duration: 600,
		triggerElement: '#presences',
		triggerHook: "onLeave"
	})
	.setTween(popinAnimation)
	.addTo(smController)

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

// var planning = new Waypoint({
// 	element: document.getElementById('users'),
// 	handler: function(direction) {
// 		if (direction == 'down') {
// 			$('.img-planning').animateCss('slideInRight');
// 			$('.img-contract').removeClass('notVisible');
// 		} else {
// 				$('.img-planning').disanimateCss('slideOutRight');
// 		}
// 	},
// 	offset: 400
// });

// var contract = new Waypoint({
// 	element: document.getElementById('presences'),
// 	handler: function(direction) {
// 		if (direction == 'down') {
// 			$('.img-contract').animateCss('zoomIn');
// 			$('.img-contract').removeClass('notVisible');
// 		} else {
// 			$('.img-contract').disanimateCss('zoomOut');
// 		}
// 	}
// });
