// Foundation
$(document).foundation();



// Smooth Scroll
var scroll = new SmoothScroll('#nav li a, #hero .go-down', {
	updateURL: false
});



$(document).ready(function() {

	// Nav Toggle
	$('.nav-toggle').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-open');
	});

	// Close Nav
	$('#nav li a, #page-overlay').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('nav-open');
	});

	// Gallery Slider
	var gallerySlider = new Flickity('#gallery .slider', {
		cellAlign: 'left',
		contain: true,
		imagesLoaded: true,
		pageDots: false,
	});

	gallerySlider.on('select', function(index) {

		if ( window.matchMedia('(max-width: 767px)').matches ) {
			var stopAtSlide = 6;
		} else if ( window.matchMedia('(max-width: 1279px)').matches ) {
			var stopAtSlide = 5;
		} else {
			var stopAtSlide = 4;
		}

		if ( index >= stopAtSlide ) {
			$('#gallery .flickity-prev-next-button.next').addClass('disabled');
		} else {
			$('#gallery .flickity-prev-next-button.next').removeClass('disabled');
		}

	});

	// Project Slider
	$('#projects .slider').flickity({
		cellAlign: 'left',
		// wrapAround: true
	});

	// Hide Imprint and Privacy
	$('.section.legal').hide();

	// Open Imprint
	$('.open-imprint').on('click', function(e) {
		e.preventDefault();

		$('#privacy').hide();
		$('#imprint').show();

		$('html, body').animate({scrollTop: $('#imprint').offset().top - 138}, 500, 'easeInOutCubic');
	});

	// Open Privacy
	$('.open-privacy').on('click', function(e) {
		e.preventDefault();

		$('#imprint').hide();
		$('#privacy').show();

		$('html, body').animate({scrollTop: $('#privacy').offset().top - 138}, 500, 'easeInOutCubic');
	});

	// Close Imprint or Privacy
	$('.section.legal .close-button').on('click', function(e) {
		e.preventDefault();

		$(this).closest('.section.legal').hide();
	});

});



// Preloader
var pageLoaded = false;
var timedOut = false;

$(window).on('load', function() {
	pageLoaded = true;
	hidePreloaderOverlay();
});

setTimeout(function() {
	timedOut = true;
	hidePreloaderOverlay();
}, 1700);

function hidePreloaderOverlay() {
	if (pageLoaded && timedOut) {

		$('body').addClass('is-loaded');

		setTimeout(function() {
			$('#preloader-overlay').hide();
		}, 500);

	}
}