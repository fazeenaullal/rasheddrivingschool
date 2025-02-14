'use strict';
var window_w = jQuery(window).innerWidth();

// var announcementCarousel = document.querySelector('#announcementCarousel')
// var carousel = new bootstrap.Carousel(announcementCarousel, {
//   interval: 3000,
//   wrap: true
// })

// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: true
// })


	/*------------------
		Popup
	--------------------*/
	jQuery('.img-popup').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 400,
	});

	var height = jQuery(window).height();
	var height = 300;
	jQuery(window).scroll(function () {
			if (jQuery(document).scrollTop() > height- 1) {
				jQuery('.department-top-menu').addClass('tiny');
			} else {
				jQuery('.department-top-menu').removeClass('tiny');
			}
		});

		// Start Header Animation
		var height = jQuery(window).height();
		var height = 100;
		jQuery(window).scroll(function () {
			if (jQuery(document).scrollTop() > height- 1) {
				jQuery('.top-menu').addClass('tiny grow');
			} else {
				jQuery('.top-menu').removeClass('tiny shrink');
			}
		});


	/**back-to-top starts**/
		var offset = 600;
		var duration = 1000;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(duration);
			} else {
				jQuery('.back-to-top').fadeOut(duration);
			}
		});

		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		/**back-to-top ends**/
		jQuery('#horizontalTab').responsiveTabs({
			 startCollapsed: 'accordion',
			 collapsible: 'accordion',
			 rotate: false,
			 setHash: true,
		});

	   jQuery('#RefreshPage').click(function() {
			window.location.reload();
		});
	//magnific-popup

	//Multiple galleries
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			}
		});
	});
	jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	jQuery('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
	
// Counter
jQuery('.counter').counterUp({
delay: 150,
time: 5000
});

jQuery('#home-logo-owl').owlCarousel({
	loop: true,
	smartSpeed:1000,
	margin: 10,
	responsiveClass: true,
	navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
	responsive: {
		0: {
			items: 1,
			nav: false,
			dots: false,
		},
		600: {
			items: 1,
			nav: false,
			dots: false,
		},
		1000: {
			items: 1,
			nav: true,
			dots: false,
			loop: true,
			autoplay: true,
			margin: 0
		}
	}
})

jQuery('#home-partners-owl').owlCarousel({
	loop: true,
	smartSpeed:1000,
	margin: 10,
	responsiveClass: true,
	navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
	responsive: {
		0: {
			items: 2,
			nav: false,
			dots: false,
		},
		600: {
			items: 2,
			nav: false,
			dots: false,
		},
		1000: {
			items: 6,
			nav: true,
			dots: false,
			loop: false,
			autoplay: true,
			margin: 20
		}
	}
})
jQuery('#home-news-owl').owlCarousel({
	loop: true,
	smartSpeed:1000,
	margin: 0,
	responsiveClass: true,
	navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
	responsive: {
		0: {
			items: 1,
			nav: false,
			dots: false,
		},
		600: {
			items: 1,
			nav: false,
			dots: false,
		},
		1000: {
			items: 2,
			nav: true,
			dots: false,
			loop: true,
			autoplay: false,
			margin: 30
		}
	}
})



function addRowCount(tableAttr) {
	jQuery(tableAttr).each(function(){
	  jQuery('th:first-child, thead td:first-child', this).each(function(){
		var tag = jQuery(this).prop('tagName');
		jQuery(this).before('<'+tag+'>Sl.No.</'+tag+'>');
	  });
	  jQuery('td:first-child', this).each(function(i){
		jQuery(this).before('<td data-th="Sl.No.">'+(i+1)+'</td>');
	  });
	});
  }
  // Call the function with table attr on which you want automatic serial number
  addRowCount('.js-serial');

  jQuery("select").change(function(){
	jQuery(this).find("option:selected").each(function(){
		var optionValue = jQuery(this).attr("value");
		if(optionValue){
			jQuery(".box").not("." + optionValue).hide();
			jQuery("." + optionValue).show();
		} else{
			jQuery(".box").hide();
		}
	});
}).change();