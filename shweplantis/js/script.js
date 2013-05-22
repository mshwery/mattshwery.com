/* Author: Matt Shwery

*/


$(document).ready(function() {

	$('header #nav ul li a').addClass('unselected').click(function(){
		$('header #nav ul li a').removeClass('selected').addClass('unselected');
		$(this).addClass('selected').removeClass('unselected').removeClass('hovered');
	}).hover(function(){
		if($(this).attr('class') !== 'selected'){
			$(this).addClass('hovered');
		}
	}, function(){
		$(this).removeClass('hovered');
	});
	
	$('#emblem').click(function(){
		$('header #nav ul li a').removeClass('selected');
	});

}); 




















