new WOW().init();

$(window).scroll(function() {
	if ($(this).scrollTop() >= 500){
		$('.nav').addClass('scrolled');
	} else{
		$('.nav').removeClass('scrolled');
	}
});
