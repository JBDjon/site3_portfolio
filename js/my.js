$(document).ready(function () {
	$('.burger').click(function () {
		$('.burger').toggleClass('show');
		$('.burger-line').toggleClass('show');
		$('.header').toggleClass('show');
		$('.nav__list').toggleClass('show');
		$('body').toggleClass('show');
	});
});

