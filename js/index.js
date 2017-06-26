$(function(){
	// 顶部导航加载指定页面
  //点击事件
  $('.hor-navigation li').unbind('click');
　$('.hor-navigation li').on('click',function() {
		$("html,body").animate({'scrollTop':'0'},100);
		if(!$(this).hasClass('active')){
			$(this).addClass('active').siblings().removeClass('active');
			$target = $(this).find('a').attr('target')+"?time="+new Date().getTime();
			$.get($target,function(data){
				$(".container").html(data);
					//方法调用
					orderClick(".nav-a", ".con-title");
			});
		}　　
　});
	//模拟点击第一个
	$('.hor-navigation li').eq(0).trigger('click');

	//封装点击右侧固定定位导航，点击跳转指定内容区域
	function orderClick(clickClass, location) {
		var $as = $(clickClass).children();
		var $ps = $(location);
		$as.on('click',function() {
			var Index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('html,body').animate({
				scrollTop: $ps.eq(Index).offset().top -43
			}, 500);
		});
	}
		
	
	//右侧头像事件
	$('.icon-xiugaitouxiang').unbind('click');
	$('.icon-xiugaitouxiang').on('click',function(){
		alert('没事你点这儿干嘛？还不快写代码！');
	});

});