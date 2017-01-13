$(function(){
	//主页面高度
	autoHeight('.main', 160);

	//页面文字初始化
	pageReset();
    stepIndex = -1;

	//操作提示
	$(".info").click(function ()  {
		$(".sweet-alert").removeClass('hidden')
	})
	$(".alert-close").click(function ()  {
		$(".sweet-alert").addClass('hidden')
	})

	//重置
	$(".reset").click(function ()  {
		pageReset();
	    stepIndex = -1;	
	    $('.prev').css('background','none')
	})

	//步骤
	$(".left-option li").click(function () {
		if ($(this).attr('class') == 'prev') {
			--stepIndex;
			if (stepIndex < -1) {
				stepIndex = -1
			}
		} else {
			++stepIndex
			if (stepIndex > 7) {
				stepIndex = 7
			}
		}
		stepAction(stepIndex, 7)
	})

	//点击文字发音
	$(".explain-picture").find('span').click(function () {
		playAudio($(this), $('audio').eq($(this).parent().parent().index())[0])
	})








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

	/**
	 * 点击字体播放音频
	 * @parame elem: 点击的目标元素选择器 
	 * @parame audio: 触发的音频选择器  
	 */
	function playAudio(elem, audio) {
		elem.removeClass('black').addClass('red');
		audio.play();
		audio.addEventListener('ended', function () {
			elem.removeClass('red').addClass('word-select black');
		});
	}

	/**
	 * 步骤执行相关动作
	 * @parame i: 当前步骤index值（下标从0开始）
	 * @parame totleIndex: 所有步骤index值（下标从0开始，总步骤减1）
	 */
	function stepAction(i, totleIndex) {
		
		pageReset();

		if (i == -1) {
			$('.prev').css('background-image', 'none');
			pageReset();
		} else if (i == totleIndex) {
			$('.next').css('background-image', 'none')
		} else {
			$('.prev').css('background-image', 'url("./images/prev.png")')
			$('.next').css('background-image', 'url("./images/next.png")')
		}

		if (i > -1 && i < 4) {
			var imgs = $(".explain-picture").eq(i).find('img');
			var words = $(".explain-picture").eq(i).find('span');	
			var audios = $('audio').eq(i)[0];
			
			imgs.addClass('img-select');	
			words.removeClass('word-select');

			imgFlashOne = setTimeout(function(){
				imgs.removeClass('img-select')
			},300)
			imgFlashTwo = setTimeout(function(){
				imgs.addClass('img-select')
			},600)
		    playBegin = setTimeout(function(){
				words.fadeIn('slow', function () {
					playAudio(words, audios)
				}).parent().parent().siblings().find('span').hide();
				
			},1200)
		} else {
			console.log(i)
		}


	}

	/**
	 * 图片文字初始化
	 */
	function pageReset() {
		$(".explain-picture").find('span').hide();
		$(".explain-picture").find('img').removeClass('img-select black red');
	}
})