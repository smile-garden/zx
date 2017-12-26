$(function(){
	// 设置图片高度
	window.onload = function(){
		function bg_img() {
		  	var showApartH = $('.show_box .swiper-slide').height();
		  	var moreLlefH = $('.learn_more .more_left').height();
			$('.show_select').height(showApartH);
			$('.show_box .swiper-slide img').height(showApartH);
			$('.learn_more .more_right').height(moreLlefH);
			$('.learn_more .more_left img').height(moreLlefH);
		};
		bg_img();
		$(window).resize(bg_img);
	}

	//隐藏导航
	window.onscroll=function(){
  		var scollH=document.body.scrollTop||document.documentElement.scrollTop;
  		var navH = $('.nav_box').height();
  		var bannerH = $('.header .swiper-slide').height();
  		var nav1 = $("#navigation1");
  		var nav2 = $("#navigation2");
  		var header_bg = $('.header_bg');
  		var changeH =bannerH - navH;
	    if(scollH >= changeH){
	        nav1.fadeOut();
	        nav2.fadeIn();
	        header_bg.fadeOut();
	    }else{
	        nav1.fadeIn();
	        nav2.fadeOut();
	        header_bg.fadeIn();
	    };	
	    
		var scrollLeft = document.body.scrollLeft||document.documentElement.scrollLeft;
		if(scrollLeft){
			$(".nav_box").css('left', '-'+scrollLeft+'px');
		}else{
			$(".nav_box").css('left', '0');
		};
	};

	// banner
	var mySwiper1 = new Swiper('#swiper1', {
		autoplay: 3000,//可选选项，自动滑动
		autoplayDisableOnInteraction : false,
		noSwipingClass : 'stop-swiping',
		loop: true,
		pagination : '#swiper-pagination1',
		paginationClickable :true,
	});

	// 展示公寓图片
	var showbar = $('.show_bar .list .item');
	var mySwiper2 = new Swiper('#swiper2', {
		autoplay: 4000,//可选选项，自动滑动
		autoplayDisableOnInteraction : false,
		noSwipingClass : 'stop-swiping',
		loop: true,
		effect : 'fade',
		fade: {
		  crossFade: false,
		},
		onSlideChangeStart: function(swiper){
	      var i = swiper.realIndex;
	      showbar.removeClass('show_item').eq(i).addClass('show_item');
	    }
	});

	// 切换展示图片
	function show(){
		var i = $(this).index();
		mySwiper2.slideTo(i+1);
		showbar.removeClass('show_item').eq(i).addClass('show_item');
	}
	showbar.on('click',show);

	var showList = $('.show_bar .list');
	showList.mouseenter(function(){
		mySwiper2.stopAutoplay();
	});
	showList.mouseleave(function(){
		mySwiper2.startAutoplay();
	});

	// 预约注册
    $(".reservation").on('click',function() {
        $("#dialog").html('<iframe src="reservation.html" style="width:100%;height:100%;border:0;"></iframe>');
        $('#dialog').show();
        $('body').css('overflow','hidden');
    });
    // 宅系用户须知
    $(".learn_more .note_more").on('click',function() {
        $("#dialog").html('<iframe src="userInfo.html" style="width:100%;height:100%;border:0;"></iframe>');
        $('#dialog').show();
        $('body').css('overflow','hidden');
    });
    // 商务合作
	$(".learn_more .bus_affairs").on('click',function() {
        $("#dialog").html('<iframe src="cooperation.html" style="width:100%;height:100%;border:0;"></iframe>');
        $('#dialog').show();
        $('body').css('overflow','hidden');
    });
})