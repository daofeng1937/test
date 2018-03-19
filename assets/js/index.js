
	$(function(){

	//图片加载
	layzeLoad();
	function layzeLoad(){
		var scrollT = $(window).scrollTop();
		var clientH = $(window).height();
		$('.image-ja').each(function(value,key){
			if($(this).offset().top < scrollT + clientH ){
				$(this).attr('src',$(this).attr('data-src'));
				$(this).removeClass('image-ja');
				$(this).hide().fadeIn(500);
			}
		})
	}
	$(window).scroll(function(){
		layzeLoad();
	})




	// 中间广告栏strat fixed条

		$(window).scroll(function(){	
			var fixTop = $(window).scrollTop();
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
			index =$(this).index();
			$(this).find('.shop-down').show();
			$(this).find('.log-item-a').addClass('log-item-bor');
			console.log(1111);
		}).mouseleave(function(){
			$(this).find('.shop-down').hide();
			$(this).find('.log-item-a').removeClass('log-item-bor');
			console.log(1221);
		})
		$('.out-logo .logo .logobar').mouseenter(function(){
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').stop(true,true);
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').hide().fadeIn();
			console.log(index);
			console.log(3000);
		}).mouseleave(function(){
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').stop(true);
			$('.out-logo .logo .logobar .log-item').eq(index).find('.shop-down').show().fadeOut();
			console.log(44444);
		})


	//中间广告栏end

	// 轮播图start
		var index = 0;
		var leng = $('.swriper .swriper-img li').length;
		run();
		var timer;
		function run(){		
			timer = setInterval(function(){
				feng(function(){
					index = ++index >= leng ? 0 : index;
				})
			},3000)
		}
		$('.swriper').mouseenter(function(){
			clearInterval(timer);
		}).mouseleave(function(){
			run();
		})
		$('.swriper .swriper-l').mouseenter(function(){
			$('.swriper .swriper-l').css({'opacity':1,'cursor':'pointer'});
		}).click(function(){
			$('.swriper .swriper-img li').stop(true,true);
			feng(function(){
				index = --index < 0 ? leng-1 : index ;	 		
			})

		}).mouseleave(function(){
			$('.swriper .swriper-l').css('opacity',0.5);
		})	

		$('.swriper .swriper-r').mouseenter(function(){
			$('.swriper .swriper-r').css({'opacity':1,'cursor':'pointer'});
		}).click(function(){
			$('.swriper .swriper-img li').stop(true,true);
			feng(function(){
				index = ++index >= leng ?  0 : index;
			})
		}).mouseleave(function(){
			$('.swriper .swriper-r').css('opacity',0.5);
		})
		$('.swriper .swriper-num li').mouseenter(function(){
			$('.swriper .swriper-img li').stop(true,true);
			var that = $(this).index();
			feng(function(){
				index = that;	
			})

		})
		function feng(fun){
			$('.swriper .swriper-img li').eq(index).fadeOut();
			$('.swriper .swriper-num li').eq(index).removeClass('active');
			fun();
			$('.swriper .swriper-img li').eq(index).fadeIn();
			$('.swriper .swriper-num li').eq(index).addClass('active');
		}





		$(window).resize(function(){
			var windWidth = $(window).width();
			if(windWidth >= 1090){
				var imgWidth = $('.fixed-all .swriper-img li img').width();
				var  marginLeft = (imgWidth - windWidth)/2; 
				$('.fixed-all .swriper-img li img').css('margin-left',-marginLeft);
			}
		})















	// 轮播图end
	// 右侧固定导航栏strat

		var goBack;
		$(window).scroll(function(){
			goBack = $(window).scrollTop();
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


	//新品首发strat

	// 	var index = 0;
	// 	var leng = $('.product .pro-cont .pro-duct .pro-item').length;
	// 	$('.product .pro-r').click(function(){
	// 		$('.product .pro-cont .pro-duct').stop(true,true);
	// 		index++;
	// 		if(index >leng/4 - 1){
	// 			$('.product .pro-cont .pro-duct').css('margin-left',-1090*(leng/4 -1));
	// 			index = leng/4-1;
	// 			return false;
	// 		}
	// 		$('.product .pro-cont .pro-duct').animate({'margin-left':-1090*index},300,'linear',function(){
	// 			$(this).css('margin-left',-1090*index);
	// 		})
	// 	})
	// 	$('.product .pro-l').click(function(){
	// 		$('.product .pro-cont .pro-duct').stop(true,true);
	// 		index--;
	// 		if(index < 0){
	// 			$('.product .pro-cont .pro-duct').css('margin-left',0);
	// 			index = 0;
	// 			return false;
	// 		}
	// 		$('.product .pro-cont .pro-duct').animate({'margin-left':-1090*index},300,'linear',function(){
	// 			$(this).css('margin-left',-1090*index);
	// 		})
	// 	})	
	// 	$('.product .pro-cont .pro-duct .pro-item').mouseenter(function(){
	// 		$(this).find('.pro-none').show();
	// 		$(this).find('.content').css('background-color','#bb985e');
	// 	}).mouseleave(function(){
	// 		$(this).find('.pro-none').hide();
	// 		$(this).find('.content').css('background-color','#fff');
	// 	})




		var mySwiper = new Swiper('.pro-cont', {
			autoplay: 3000,
			// 如果需要前进后退按钮
			nextButton: '.pro-l',
			prevButton: '.pro-r',

			// 每页有几个slides
			slidesPerView: 4,
			// 每两个slide之间的间隙是30px
			spaceBetween: 10,

			slidesPerGroup: 4,
			noSwiping : true,

			loop: false,
			loopFillGroupWithBlank: true,

		})   
		$('.swiper-container').mouseenter(function(){
			mySwiper.stopAutoplay();
		}).mouseleave(function(){
			mySwiper.startAutoplay();
		})

		$('.product .pro-cont .pro-duct .pro-item').mouseenter(function(){
		$(this).find('.pro-none').show();
		$(this).find('.content').css('background-color','#bb985e');
		}).mouseleave(function(){
		$(this).find('.pro-none').hide();
		$(this).find('.content').css('background-color','#fff');
		})
	//新品首发end


	//限时购strat

		run();
		setInterval(run,1000);
		function run(){
			var d = new Date();
			var d1 = new Date('2017-12-27 0:0:0');
			var time = d1.getTime() - d.getTime();
			var hour = timer(Math.floor(time/1000/60/60));
			var minute = timer(Math.floor(time/1000/60%60));
			var second = timer(Math.floor(time/1000%60));
			$('.sj-shop .sj-content .sj-item1 .sj-ittime .time1').text(hour);
			$('.sj-shop .sj-content .sj-item1 .sj-ittime .time2').text(minute);
			$('.sj-shop .sj-content .sj-item1 .sj-ittime .time3').text(second);
		}
		function timer(time1){
			if(time1<10){
				time1 = '0'+time1;
			}
			return time1;
		}



	//限时购end



	// 大家都在说strat
	//自己写的
	// 	var timer;
	// 	var index = 0 
	// 	var leng = $('.authority .auth .auth-tain .auth-content .auth-item').length;
	// 	$('.authority .auth .auth-tain .auth-content .auth-item:eq(0)').clone(true).appendTo($('.authority .auth .auth-tain .auth-content'));
	// 	$('.authority .auth .auth-tain .auth-content .auth-item:eq(1)').clone(true).appendTo($('.authority .auth .auth-tain .auth-content'));
	// 	$('.authority .auth .auth-tain .auth-content .auth-item:eq(2)').clone(true).appendTo($('.authority .auth .auth-tain .auth-content'));
	// 	run();
	// 	function run(){		
	// 		timer = setInterval(function(){
	// 			if(index == leng){
	// 				$('.authority .auth .auth-tain .auth-content').css('margin-left',0);
	// 				index=0
	// 			}
	// 			index++;
	// 			$('.authority .auth .auth-tain .auth-content').animate({'margin-left':-367*index},function(){
	// 				$('.authority .auth .auth-tain .auth-content').stop();
	// 			});
	// 		},3000)
	// 	}
	// 	$('.authority .auth').mouseenter(function(){
	// 		clearInterval(timer);
	// 	}).mouseleave(function(){
	// 		run();
	// 	})
	// 	$('.authority .auth .auth-left').click(function(){
	// 		$('.authority .auth .auth-tain .auth-content').stop(true,true);
	// 		if(index == 0){
	// 			$('.authority .auth .auth-tain .auth-content').css('margin-left',-367*leng);
	// 			index = leng;
	// 		}
	// 		index--;
	// 		$('.authority .auth .auth-tain .auth-content').animate({'margin-left':-367*index},function(){
	// 			$('.authority .auth .auth-tain .auth-content').stop();
	// 		});
	// 	})
	// 	$('.authority .auth .auth-right').click(function(){
	// 		$('.authority .auth .auth-tain .auth-content').stop(true,true);
	// 		if(index == leng){
	// 			$('.authority .auth .auth-tain .auth-content').css('margin-left',0);
	// 			index = 0;
	// 		}
	// 		index++;
	// 		$('.authority .auth .auth-tain .auth-content').animate({'margin-left':-367*index},function(){
	// 			$('.authority .auth .auth-tain .auth-content').stop();
	// 		});
	// 	})
		var mySwiper = new Swiper('.auth-tain', {
			loop: true,
			autoplay: 3000,

			// 每页有几个slides
			slidesPerView: 3,
			// 每两个slide之间的间隙是30px
			spaceBetween: 12,
			// 3个为一组
			slidesPerGroup: 1,
			// 如果需要前进后退按钮
			nextButton: '.auth-left',
			prevButton: '.auth-right'
	  	}) 

	  	$('.authority .auth .auth-tain').mouseenter(function(){
	  		mySwiper.stopAutoplay();
	  	}).mouseleave(function(){
	  		mySwiper.startAutoplay();
	  	})
	})



	// 大家都在说end