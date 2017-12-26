$(function(){

	// 导航栏
	window.onscroll=function(){
		var serviceList = $('.service_box .service .list');
		var facilityList = $('.facility_box .facility .list');
		var clientH = $(window).height();
		var serviceT = $('.service_box').offset().top - clientH/2;
		var facilityT = $('.facility_box').offset().top - clientH/2;
		var scrollH = document.body.scrollTop||document.documentElement.scrollTop;
		var scrollLeft = document.body.scrollLeft||document.documentElement.scrollLeft;

		if (scrollH >= serviceT) {
			serviceList.addClass('service_active');
		};
		if (scrollH >= facilityT) {
			facilityList.addClass('facility_active');
		};

		if(scrollLeft){
			$(".nav_box").css('left', '-'+scrollLeft+'px');
		}else{
			$(".nav_box").css('left', '0');
		};

	};

	// 预约入住
    $(".reservation").on('click',function() {
        $("#dialog").html('<iframe src="reservation.html" style="width:100%;height:100%;border:0;"></iframe>');
        $('#dialog').show();
        $('body').css('overflow','hidden');
    });

})