/**************** SLIDE JQUERY *********************/
$(function(){
		$('.mySlides img:gt(0)').hide();
	
		setInterval(function(){
			
			$(".mySlides :first-child")
				
				.fadeOut(1000)
				.next("img")
				.show()
				.fadeIn(1000)
				.end()
				.appendTo('.mySlides');}, 
			5000);
});
