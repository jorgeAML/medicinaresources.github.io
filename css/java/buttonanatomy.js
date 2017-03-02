$(document).ready(function(){
	$('div').mouseenter(function(){
		$('.mybutton').fadeTo('fast', 0.15);
		$('div').mouseleave(function(){
			$('.mybutton').fadeTo('fast', 0.85);
		});
	});
});
