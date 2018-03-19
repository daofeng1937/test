	$(function(){
	//图片加载
		// $(window).scroll(function(){
		// 	scrollLoad();
		// })
		// scrollLoad();
		// function scrollLoad(){
		// 	var scrollT = $(window).scrollTop();
		// 	var clientHeight = $(window).height();
		// 	$('.image-load').each(function(){
		// 		if($(this).offset().top < scrollT + clientHeight){
		// 			$(this).attr('src',$(this).attr('data-src'));
		// 			$(this).removeClass('image-load');
		// 			$(this).hide().fadeIn(500);
		// 	}
		// 	})
		// }


	// 中间广告栏strat fixed条

		$(window).scroll(function(){	
			var fixTop = $(window).scrollTop();
				console.log(fixTop);
			if(fixTop >= 163){
				$('.fix-gundong').slideDown(200);
			}else{
				$('.fix-gundong').slideUp(200);
			}
		})

	//中间广告栏end fixed条

	//中间广告栏strat
		var index = 1;
		$('.out-logo .logo .logobar .log-item').mouseenter(function(){
			index = $(this).index();
			$(this).find('.log-item-a').addClass('log-item-bor');
			$(this).find('.shop-down').show();
		}).mouseleave(function(){
			$(this).find('.shop-down').hide();
			$(this).find('.log-item-a').removeClass('log-item-bor');
		})
		$('.out-logo .logo .logobar').mouseenter(function(){
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').stop(true,true);
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').hide().fadeIn();
		}).mouseleave(function(){
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').stop(true);
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').show().fadeOut();
		})

	//中间广告栏end

	// 右侧固定导航栏strat
		var goBack;
		$(window).scroll(function(){
			goBack = $(window).scrollTop();
			console.log(goBack);
			if(goBack >= 900){
				$('.right-fix .goback').show();
			}else{
				$('.right-fix .goback').hide();
			}
		})
		$('.right-fix .goback').click(function(){
			var step = 200;
			
			var timer = setInterval(function(){
				goBack -= step;
				$(window).scrollTop(goBack);
				if(goBack <= 0){
					clearInterval(timer);
					goBack = 0;
					return false;
				}
			},100);
		})

	// 右侧固定导航栏end
		var asb = true;
		var abs = true;
		$('.login-backgd .login-box .login-content .text .username').keyup(function(){
			var content = $(this).val().trim();
			if(asb == true){
				$(this).siblings('.slide').show();
				asb = false;	
			}
			$(this).siblings('.slide').find('.s-cont').text(content);
			$(this).siblings('.text-reg').show();
		}).blur(function(){
			var tex = $(this).siblings('.slide').children('li:eq(0)').text();
			if($(this).val().length != 0 && abs == true){
				$(this).val(tex);
				$(this).siblings('.slide').delay(200).hide(0);
				abs = false;
			}else if($(this).val().length == 0){
				$(this).siblings('.slide').hide(0);
			}
		})
		$('.login-backgd .login-box .login-content .text .slide li').click(function(){
			var liCont = $(this).text();
				console.log(liCont);
			$(this).parent().siblings('.username').val(liCont);
			$(this).parent().delay().hide();
		})
		$('.login-backgd .login-box .login-content .text .text-reg').click(function(){
			$(this).hide();
			$(this).siblings('.username').val('');
			asb = true;
			abs = true;
		})








		$('.login-backgd .login-box .login-content .password .pass-cont').keyup(function(){
			$(this).siblings('.pass-reg').show();
		})
		$('.login-backgd .login-box .login-content .password .pass-reg').click(function(){
			$(this).hide();
			$(this).siblings('.pass-cont').val('');
		})
















	})