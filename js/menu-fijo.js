// JavaScript Document
$(document).ready(function(){
	var altura = $('header').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 0 ){
			$('header').addClass('area-cabecera-fijo');
			$('.cabecera').addClass('cabecera-fijo');
			$('.logo').addClass('logo-fijo');
			$('.area-menu').addClass('area-menu-fijo');
			$('.area-callcenter').addClass('area-callcenter-fijo');
            $('.area-banner-int').addClass('area-banner-int-fijo');
		} else {
			$('header').removeClass('area-cabecera-fijo');
			$('.cabecera').removeClass('cabecera-fijo');
			$('.logo').removeClass('logo-fijo');
			$('.area-menu').removeClass('area-menu-fijo');
			$('.area-callcenter').removeClass('area-callcenter-fijo');
            $('.area-banner-int').removeClass('area-banner-int-fijo');
		}
	});

});


