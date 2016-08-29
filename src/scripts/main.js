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

$(window).scroll(function () {
	if ($(this).scrollTop() >= 500){
		$('.nav').addClass('scrolled');
	} else{
		$('.nav').removeClass('scrolled');
	}
});
