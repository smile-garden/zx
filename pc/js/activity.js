$(function(){
	// 导航栏
    window.onscroll=function(){
        var scrollLeft = document.body.scrollLeft||document.documentElement.scrollLeft;

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