(function($) {
	$(function(){
	  $('#menu-primary-menu .dropdown').hover(function() {
	    $(this).find('.dropdown-menu').addClass('hover');
	    $(this).find('.menu-item').addClass('tran');

	  }, function() {
	    $(this).find('.dropdown-menu').removeClass('hover');
	    $(this).find('.menu-item').removeClass('tran');
	  })
	})

	$(function(){
	  $('.header-mobile .navbar-toggler').click(function() {
	    $(this).addClass('open');

	  }, function() {
	    $(this).removeClass('open');
	  })
	})

	  $('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: true,
	    slideshowSpeed: 2000,
	    itemMargin: 5,
	    arrows: false,
	    asNavFor: '#slider'
	  });
	 
	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: true,
	    slideshowSpeed: 2000,
	    arrows: false,
	    
	    sync: "#carousel"
	  });

	$(window).load(function() {

	});

})(jQuery);