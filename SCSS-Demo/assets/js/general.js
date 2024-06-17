$(document).ready(function() {
  // Cache selectors for better performance
  var $window = $(window);
  var $header = $('header');
  var $scrollToTop = $('#scrollToTop');
  var $nav = $('nav');
  var $hamburgerMenu = $(".hamburger-menu");

  // Scroll to top functionality
  $scrollToTop.click(function() {
      $('html, body').animate({ scrollTop: 0 }, 600);
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
      autoplaySpeed: 1500,
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
      ]
  });

  // Toggle navigation menu
  $hamburgerMenu.click(function(e) {
      e.preventDefault();
      $nav.toggleClass("active");
      $("body").toggleClass("over-hidden");
      $(this).toggleClass("clicked");
  });

  // Remove active class on nav menu if we click outside of nav
  $(document).click(function(event) {
      if (!$(event.target).closest($nav).length && !$(event.target).closest($hamburgerMenu).length) {
          if ($nav.hasClass("active")) {
              $nav.removeClass("active");
              $("body").removeClass("over-hidden");
              $hamburgerMenu.removeClass("clicked");
          }
      }
  });

  // Add class in header on scroll
  $window.scroll(function() {
      scroll_fn($window, $header, $scrollToTop);
  });

  // Initial check for scroll position on window load
  $(window).on('load', function() {
      scroll_fn($window, $header, $scrollToTop);
  });

  // Initial call for scroll position on document ready
  scroll_fn($window, $header, $scrollToTop);

  // Remove specific classes on resize
  $window.resize(function() {
      removeSpecificClasses($nav, $hamburgerMenu);
  });
});

function scroll_fn($window, $header, $scrollToTop) {
  var scrollTop = $window.scrollTop();
  $header.toggleClass('fixed', scrollTop >= 100);

  // Toggle class on scroll top button
  $scrollToTop.toggleClass('show', scrollTop >= 100);
}

function removeSpecificClasses($nav, $hamburgerMenu) {
  $nav.removeClass('active');
  $('body').removeClass('over-hidden');
  $hamburgerMenu.removeClass('clicked');
}