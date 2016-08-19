new WOW().init();

window.addEventListener("scroll", function () {
	if (window.pageYOffset >= 500){
		$('.nav').addClass('scrolled');
	} else{
		$('.nav').removeClass('scrolled');
	}

})
