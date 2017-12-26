$(function(){
	// banner
	var mySwiper1 = new Swiper('#swiper1', {
		autoplay: 3000,//可选选项，自动滑动
		autoplayDisableOnInteraction : false,
		loop: true,
		pagination : '#swiper-pagination1',
		paginationClickable :true,
	});

	// 公寓展示
	var mySwiper1 = new Swiper('#swiper2', {
		autoplay: 3000,//可选选项，自动滑动
		autoplayDisableOnInteraction : false,
		loop: true,
		pagination : '#swiper-pagination2',
		paginationClickable :true,
		effect : 'fade',
		fade: {
		  crossFade: false,
		}
	});
})