$(document).ready(function() {

    // Cache selectors for better performance
    var $window = $(window);
    var $header = $('header');
    var $scrollToTop = $('#scrollToTop');
    var heroBannerHeight = $(".hero-banner").outerHeight();

    // Add class in header on scroll
    $window.scroll(function() {
        var scrollTop = $window.scrollTop();
        $header.toggleClass('fixed', scrollTop >= 100);
        
        // Toggle class on scroll top button
        $scrollToTop.toggleClass('show', scrollTop >= heroBannerHeight);
    });

    // Scroll to top functionality
    $scrollToTop.click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });

    // Initialize slick slider
    $('.testim-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $(".hamburger-menu").click(function(){
        $("nav").addClass("active");
        $("body").addClass("over-hidden");
    })
    $(".menu-close-icon").click(function(){
        $("nav").removeClass("active");
        $("body").removeClass("over-hidden");
    })
});