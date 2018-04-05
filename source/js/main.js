(function($) {
	$(function(){
	  $('.dropdown').hover(function() {
	    $(this).find('.dropdown-menu').addClass('hover');
	    $(this).find('.menu-item').addClass('tran');

	  }, function() {
	    $(this).find('.dropdown-menu').removeClass('hover');
	    $(this).find('.menu-item').removeClass('tran');
	  })
	})

	$(window).load(function() {
	  $('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemMargin: 5,
	    arrows: false,
	    asNavFor: '#slider'
	  });
	 
	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    arrows: false,
	    sync: "#carousel"
	  });
	});

	$(window).load(function() {

	});

})(jQuery);