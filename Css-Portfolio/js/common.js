var $ = jQuery.noConflict();



  
 /*============Menu JS================*/  
$(document).ready(function () {
     AOS.init();
    
    jQuery(".navbar-toggler").click(function () {
        if (jQuery('header').hasClass('current')) {
            jQuery('header').removeClass('current');
            jQuery('body').removeClass('menu-overlay');
            jQuery('.navbar-collapse').removeClass('anim_done');
        } else {
            jQuery('header').addClass('current');
            jQuery('body').addClass('menu-overlay');
            setTimeout(function () {
                jQuery('.navbar-collapse').addClass('anim_done');
            }, 2500);
        }
    });
    jQuery("header .dropdown-toggle").click(function () {
        if (jQuery('header').hasClass('menu-open')) {
            jQuery('header').removeClass('menu-open');
        } else {
            jQuery('header').addClass('menu-open');
        }
    });
    var wrapper_language = $('header');
    $('body,html').click(function (e) {
        if (
            (wrapper_language[0] != e.target) &&
            (!wrapper_language.has(e.target).length)
        ) {
            $('header').removeClass('menu-open');
        }
    });
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
// On Scrool add/remove class
$(window).on('scroll', function () {
    didScroll = true;

    if (window.scrollY == 0) {
        $('header').addClass('to-top');
    }
    else {
        $('header').removeClass('to-top');
    }
});
// For Dropdown
$(".navbar-nav li").hover(function () {
    $(this).children("ul").stop().delay(200).animate({height: "toggle", opacity: "toggle"}, 200);
});

 /*============Menu JS================*/ 
 $(document).ready(function () {
 // for btn effect
    $(".btn-main").each(function () {
        var content = $(this).contents().get(0).nodeValue;
        var child_span = $(this).children();
        var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
        $(this).text('').append("<div></div>");
        $(ele).appendTo($(this).find("div"));
        $(child_span).appendTo($(this));
    });
});

$(".btn-open").click(function () {
    $(".modal-wrapper").addClass("open");
  });

$(".btn-close").click(function () {
    $(".modal-wrapper").removeClass("open");
});

  //Menu popupmodal open

  $(document).on("click", "#menu-gallery", function () {
    $("#navbar_close").trigger("click");
    $("#sliderModal").modal("show");
  });
  $(document).on("click", "#video-menu", function () {
    $("#navbar_close").trigger("click");
    //$('#videopopup').modal('show');
    $(".modal-wrapper").addClass("open");
  });

  $(document).on("click", "#menu-download", function () {
    $("#navbar_close").trigger("click");
    $("#basicModal").modal("show");
    $("#myModalLabel").html("Download Project Brochure");
    $("#project-brochure-submit").before(
      '<input type="hidden" name="brochure-form" id="brochure-form" value="project-brochure">'
    );
  });



  if ($('.project-gallery .slider-wrapper').length > 0) {
        $('.project-gallery .slider-wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            dotsClass: 'custom_paging',
            dots: true,
            draggable: false,
            fade:true,
            infinite: false,
            prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
         
             customPaging: function (slider, i) {
                console.log(slider);
                return (i + 1) + '/' + slider.slideCount;
            }
        });
    }
    if ($('.preview-slider .slider-wrapper').length > 0) {
        $('.preview-slider .slider-wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            dotsClass: 'custom_paging',
            dots: true,
            draggable: false,
            // fade:true,
            infinite: false,
            prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
            customPaging: function (slider, i) {
                console.log(slider);
                return (i + 1) + '/' + slider.slideCount;
            }
        });
    }

/* Value Slider */
    

  $(".value-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: false,
      prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
            customPaging: function (slider, i) {
              console.log(slider);
              return (i + 1) + '/' + slider.slideCount;
          },
            asNavFor: ".value-text-slider",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  if ($(".value-text-slider .single-slide").length > 0) {
    $(".value-text-slider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      focusOnSelect: true,
      asNavFor: ".value-slider",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            slidesToShow: 1,
          },
        },
      ],
    });
  }
    
    

    $(document).ready(function () {
        $('div.scroll-main').click(function() {
        $('html, body').animate({
          scrollTop: $(".sc-top").offset().top
        }, 1000)
        })    
  });



  $(document).ready(function(){												

    //Navigation Menu Slider
     $('#nav-expander').on('click',function(e){
           e.preventDefault();
           $('body').toggleClass('nav-expanded');
       });
       $('#nav-close').on('click',function(e){
           e.preventDefault();
           $('body').removeClass('nav-expanded');
       });

       // Initialize navgoco with default options
     $(".main-menu").navgoco({
         caret: '<span class="caret"></span>',
         accordion: false,
         openClass: 'open',
         save: true,
         cookie: {
             name: 'navgoco',
             expires: false,
             path: '/'
         },
         slide: {
             duration: 300,
             easing: 'swing'
         }
     });

   });

    //keeps thumbnails active when changing main image, via mouse/touch drag/swipe
  $('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	//remove all active class
	$('.thumb-nav .slick-slide').removeClass('slick-current');
	//set active class for current slide
	$('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
  });
  
  $('.open-modal').click(function () {
	 $('#fancybox-popup-form a:eq(0)').trigger('click');
  });
  
  $('[data-fancybox]').fancybox({
	toolbar  : true,
	buttons: [
	  "zoom",
	  "share",
	  "slideShow",
	  "fullScreen",
	  "thumbs",
	  "close",
  
	],
	 // Arrows
	btnTpl: {
	  smallBtn:
		'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
	  close:
		'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
		'<svg viewBox="0 0 40 40">' +
		'<path d="M10,10 L30,30 M30,10 L10,30" />' +
		"</svg>" +
		"</button>",
	  arrowLeft:
    '<button data-fancybox-prev  type="button" class="fancybox-button test fancybox-button--arrow_left slick-prev slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>'
		,
	  arrowRight:
    '<button data-fancybox-next  type="button" class="fancybox-button test-right fancybox-button--arrow_right slick-next slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>'
		
	},
	iframe : {
	  preload : false
	}
  })

  /* Value Slider */
    

  $(".amenities-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: false,
    dotsClass: 'custom_paging',
    dots: true,
      prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10"><circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle><path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path></g></svg></button>',
            customPaging: function (slider, i) {
              console.log(slider);
              return (i + 1) + '/' + slider.slideCount;
          },
            asNavFor: ".amenities-text-slider",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  if ($(".amenities-text-slider .single-slide").length > 0) {
    $(".amenities-text-slider").slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      focusOnSelect: true,
      asNavFor: ".amenities-slider",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            slidesToShow: 1,
          },
        },
      ],
    });
  }