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




	// var explainWord = ['cleaned&nbsp;my&nbsp;room', 'washed&nbsp;my&nbsp;clothes', 'stayed&nbsp;at&nbsp;hoom', 'watched&nbsp;TV'];

	//上一步与下一步
	var stepIndex = -1;
	$(".next").click(function () {
		++stepIndex;
		stepAction(stepIndex)
		

	})

	function stepAction(i) {
		var imgs = $(".explain-picture");
		var imgsNum = imgs.length;

		imgs.eq(i).children('img').addClass('img-select').parent().parent().sbilings().children('img').removeClass('img-select');
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