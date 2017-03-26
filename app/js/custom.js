jQuery(function($) {

	$(document).ready(function() {
	 	$('#slides').superslides({
			play: 3000,
			animation: 'fade'
	    });

	    // add class active 
	    $('.button-menu').click(function() {
	    	/* Act on the event */
	    	$(this).toggleClass('active');
	    	$('.navbar-nav').toggleClass('active');
	    });
	});

});
