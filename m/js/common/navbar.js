$(function(){
	// 导航栏
	var nav_button = $('.nav_hide .nav_button');
	var nav_close = $('.nav_hide .nav_close');
	var navbar = $('.navbar');

	function showHandle(){
		nav_button.hide();
		nav_close.show();
		navbar.addClass('nav_show');
	};

	function closeHandle(){
		nav_button.show();
		nav_close.hide();
		navbar.removeClass('nav_show');
	};

	nav_button.on('click',showHandle);
	nav_close.on('click',closeHandle);

	$(window).scroll(function(){
		nav_button.show();
		nav_close.hide();
		navbar.removeClass('nav_show');
	});

})