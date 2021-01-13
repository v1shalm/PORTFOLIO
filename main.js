$('.scrollTo').click(function() {
	var getElem = $(this).attr('href');
	var targetDistance = 20;
	if ($(getElem).length) {
		var getOffset = $(getElem).offset().top;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
	return false;
});