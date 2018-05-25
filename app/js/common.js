$(function() {

	let link = $('.menu_link');
	let link_active = $('.menu_link_active');
	let menu = $('.toggle-menu');
	let nav_link = $('.toggle-menu a');


	link.on('click', function () {
		link.toggleClass('menu_link_active');
		menu.toggleClass('menu_active')
	});
	nav_link.on('click', function () {
		link.toggleClass('menu_link_active');
		menu.toggleClass('menu_active');
	});

	$('.next').click(function () {
	    let currentSlide = $('.img-slides.current');
	    let nextSlideIndex = $('.img-slides.current').index();
        let nextSlide = $('.img-slides').eq(nextSlideIndex);
	    currentSlide.fadeOut(1000);
	    currentSlide.removeClass('current');

	    if (nextSlideIndex == ($('.img-slides:last').index())) {
	        $('.img-slides').eq(0).fadeIn(1000);
	        $('.img-slides').eq(0).addClass('current');
        }else{
	        nextSlide.fadeIn(1000);
	        nextSlide.addClass('current')
        }

    });

    $('.prev').click(function () {
	    let currentSlide = $('.img-slides.current');
	    let currentSlideIndex = $('.img-slides.current').index();
        let prevSlideIndex = currentSlideIndex - 1;
        let prevSlide = $('.img-slides').eq(prevSlideIndex);

	    currentSlide.fadeOut(1000);
	    currentSlide.removeClass('current');
	    prevSlide.fadeIn(1000);
	    prevSlide.addClass('current');

    });

    $('._next').click(function () {
	    let currentSlide = $('.img-slides_1.cur');
	    let nextSlideIndex = $('.img-slides_1.cur').index();
        let nextSlide = $('.img-slides_1').eq(nextSlideIndex);
	    currentSlide.fadeOut(1000);
	    currentSlide.removeClass('cur');

	    if (nextSlideIndex == ($('.img-slides_1:last').index())) {
	        $('.img-slides_1').eq(0).fadeIn(1000);
	        $('.img-slides_1').eq(0).addClass('cur');
        }else{
	        nextSlide.fadeIn(1000);
	        nextSlide.addClass('cur')
        }

    });

    $('._prev').click(function () {
	    let currentSlide = $('.img-slides_1.cur');
	    let currentSlideIndex = $('.img-slides_1.cur').index();
        let prevSlideIndex = currentSlideIndex - 1;
        let prevSlide = $('.img-slides_1').eq(prevSlideIndex);

	    currentSlide.fadeOut(1000);
	    currentSlide.removeClass('cur');
	    prevSlide.fadeIn(1000);
	    prevSlide.addClass('cur');

    });

    $('.header_slider').slick({
    	dots: true,
    	autoplaySpeed: 5000,
    	speed: 600,
    	appendDots: $('.dots-nav')
    });

});
