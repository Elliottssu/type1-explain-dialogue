$(function(){
	//主页面高度
	autoHeight('.main', 160);









	//操作提示
	$(".info").click(function ()  {
		$(".sweet-alert").removeClass('hidden')
	})
	$(".alert-close").click(function ()  {
		$(".sweet-alert").addClass('hidden')
	})





	//步骤
	var stepIndex = -1;
	$(".next").click(function () {
		++stepIndex;
		stepAction(stepIndex)
	})

	$(".prev").click(function () {
		--stepIndex;
		stepAction(stepIndex)
	})
	$(".explain-picture").find('span').hide()
	function stepAction(i) {
		var imgs = $(".explain-picture");
		var imgsNum = imgs.length;
		var audio = $('audio');
		imgs.eq(i).find('img').addClass('img-select').parent().siblings().find('img').removeClass('img-select');
		imgs.find('span').hide()

		setTimeout(function(){
			imgs.eq(i).find('img').removeClass('img-select')
		},300)
		setTimeout(function(){
			imgs.eq(i).find('img').addClass('img-select')
		},600)
		setTimeout(function(){
			imgs.eq(i).find('span').fadeIn('slow', function () {
				$(this).css('color', 'red');
				audio.eq(i)[0].play();
				audio.eq(i)[0].addEventListener('ended', function () {
					imgs.eq(i).find('span').css('color', 'black');
				});
			}).parent().parent().siblings().find('span').hide();
			
		},1200)

	
	}








	/**
	 * 自动调整高度
	 * @parame elem: 调整的目标元素选择器 
	 * @parame height: 浏览器窗口高度剪掉的值 
	 * @return resultHeight: 目标元素随着窗口高度的最终值 
	 */
	function autoHeight(elem, height) {
		$(elem).css('height', $(window).height() - height + 'px');
		$(window).resize(function () {
			$(elem).css('height', $(window).height() - height + 'px');
		})
	}

})