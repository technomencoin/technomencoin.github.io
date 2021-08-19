// JavaScript Document
/*********************/
//<![CDATA[
  jQuery(window).load(function() { // makes sure the whole site is loaded
    jQuery('.loader-container').delay(2000).fadeOut(); // will first fade out the loading animation
    jQuery('#loader-circle').delay(20).fadeOut('slow'); // will fade out the white DIV that covers the website.
    jQuery('body').delay(2000).css({'overflow':'visible'});
})
//]]>
//endLoader Animation

//Check to see if the window is top if not then display button
jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 100) {
      jQuery('.scrollToTop').fadeIn();
  } else {
      jQuery('.scrollToTop').fadeOut();
  }
  });
  jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},700);
  return false;
});
//endScrollToTop




$(document).ready(function() {

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.bottomHeader').addClass("fixed-top");
      } else {
        $('.bottomHeader').removeClass("fixed-top");
      }
    });
    jQuery('.hambergerBtn').click(function() {
        jQuery(this).toggleClass('clicked');
        jQuery('.customNav').toggleClass('show_nav');
        if (!$(this).hasClass("clicked")) {
            $(".customNav>ul>li.hasSubmenu>ul, .megamenu").slideUp();
        }
    });

    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
        return false;

    });
    $(".hasMegamenu, .hasSubmenu").each(function () {
      $(this).append("<span class='expandICon'>+</span>")
    });
    $(document).on("click", ".expandICon", function () {
      $(this).siblings("ul, .megamenu").slideToggle(400);
      // $('.dropMegaMenu').slideToggle();
    });

    // Owl Carousel
    $(".home-carousel").owlCarousel({

      items: 1,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      // autoplayTimeout:1000,
      // animateOut: "fadeOut",
      // animateIn : "fadeIn",
      dots: true,
    });

    $(".domestic-carousel").owlCarousel({

      items: 1,
      margin: 30,
      loop: true,
      // autoplay: true,
      // animateOut: "fadeOut",
      // animateIn : "fadeIn",
      autoplayHoverPause: true,
      dots: false,
      nav: true,
      navText: ['<img src="images/angle-left.png">', '<img src="images/angle-right.png">'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }

    });



    $(".testimonial-carousel").owlCarousel({

      items: 1,
      margin: 0,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      nav: true,
      center: true,
      navText: ['<img src="images/logn-arrow-left.png">', '<img src="images/logn-arrow-right.png">'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }

    });


});