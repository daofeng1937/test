 	$(function(){
 	//图片延迟加载
 		$(window).scroll(function(){
 			imgLoad();
 		})
 		imgLoad();
		function imgLoad(){
			var winTop = $(window).scrollTop();
			var clientHeight = $(window).height();
			$('.image-load').each(function(value,key){
			var imgTop = $(this).offset().top;
			if(imgTop < winTop + clientHeight){
			$(this).attr('src',$(this).attr('data-src'));
			$(this).hide().fadeIn(500);
			$(this).removeClass('image-load');
			}
			})
		}

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

	//床品图片切换start
	var index = 0;
	$('.background-all .show-content .show-img .s-img-small li').mouseenter(function(){
		$('.background-all .show-content .show-img .s-img-small li').eq(index).find('img').css({'width':'78px','height':'78px','border':'none'})

		$('.background-all .show-content .show-img .s-img-big li').siblings('.big-active').removeClass('big-active');
		index = $(this).index();
		 $('.background-all .show-content .show-img .s-img-big li').eq(index).addClass('big-active');
		 $(this).find('img').css({'width':'74px','height':'74px','border':'2px solid #b4a078'});
	})


	var selectLine = null;
	var selectColor = null;
	$('.bed-project .color .col-con .col-item').click(function(){
		selectColor = true;
		$(this).siblings('.col-active').removeClass('col-active');
		$('.background-all .show-content .show-img .s-img-big li').eq(index).removeClass('big-active');
		index = $(this).index() + 5;
		$('.background-all .show-content .show-img .s-img-big li').eq(index).addClass('big-active');
		$(this).addClass('col-active');
	})

	$('.numb .numb-item1').click(function(){
		var num = $(this).next().children('.inp-cont').val();
		num--;
		if(num < 1){
			$('.bed-project .numb .numb-cont .numb-item1 .cont-hide').stop(true);
			$('.bed-project .numb .numb-cont .numb-item1 .cont-hide').stop(true,true);
			$('.bed-project .numb .numb-cont .numb-item1 .cont-hide').text('本商品一件起售');
			$('.bed-project .numb .numb-cont .numb-item1 .cont-hide').fadeIn(1000).fadeOut(1000);
			$(this).css('cursor','not-allowed');
			num = 1;
			return;
		}
		$(this).next().children('.inp-cont').val(num);
		$(this).css('cursor','pointer');
	})
	$('.numb .numb-item3').click(function(){
		var num = $(this).prev().children('.inp-cont').val();
		num++;
		if(num > 50){
			$(this).css('cursor','not-allowed');
			num = 50;
			return;
		}
		$(this).prev().children('.inp-cont').val(num);
	})
	$('.bed-project .length .length-con .leng-item img').hide();
	$('.bed-project .length .length-con .leng-item').click(function(){
		selectLine = true;
		$(this).siblings('.leng-activ').removeClass('leng-activ').children('img').hide();
		$(this).children('img').show();
		$(this).addClass('leng-activ');
	})
	$('.may .may-li').click(function(){

		if(selectLine == true && selectColor == true){
			$('.show-content  .login-content').fadeIn();
			$('.shadow').fadeIn();
		}else{
			$('.bed-project .numb .numb-cont .numb-item1 .cont-hide').stop(true,true);
			$('.bed-project .numb .numb-cont .numb-item1 .cont-hide').text('请选择商品规格');
			$('.bed-project .numb .numb-cont .numb-item1 .cont-hide').fadeIn(1000).fadeOut(1000);
		}
	})
	$('.show-content .login-content .login-tit .noplay').click(function(){
		$('.show-content  .login-content').fadeOut();
		$('.shadow').fadeOut();
	})
	var index1 = 0;
	$('.introduction .introduct-tit .duct-item').click(function(){
		$(this).siblings('.it-active').removeClass('it-active');
		$(this).parent().next().children().eq(index1).removeClass('it-active');
		
		index1 = $(this).index();
		$(this).addClass('it-active');
		$(this).parent().next().children().eq(index1).addClass('it-active');
	})
	var lengs = $('.content-floor .run-out-img .position .img-swriper1 .image li').length;
	var active = 0;
	 $('.content-floor .run-out-img .position .img-swriper1 .image li:eq(0)').clone(true).appendTo($('.content-floor .run-out-img .position .img-swriper1 .image'));

	$('.content-floor .run-out-img .position .img-left').click(function(){
		$('.content-floor .run-out-img .position .img-swriper1 .image').stop(true,true);
		if(active == 0){
			$('.content-floor .run-out-img .position .img-swriper1 .image').css('margin-left',-700*lengs);
			active = lengs;
		}
		active--;
		$('.content-floor .run-out-img .position .img-swriper1 .image').animate({'margin-left':-700*active},200);
	})
	$('.content-floor .run-out-img .position .img-right').click(function(){
		$('.content-floor .run-out-img .position .img-swriper1 .image').stop(true,true);
		if(active == lengs){
			$('.content-floor .run-out-img .position .img-swriper1 .image').css('margin-left',0);
			active = 0;
		}
		active++;
		$('.content-floor .run-out-img .position .img-swriper1 .image').animate({'margin-left':-700*active},200);
	})

	$('.content-floor .introduction .introduct-cont .cont-item .img-bottom .btm-img .btm-zhe').click(function(){
		$('.shadow').fadeIn();
		$('.content-floor .run-out-img').fadeIn();
	})
	$('.content-floor .run-out-img .position .img-x').click(function(){
		$('.shadow').fadeOut();
		$('.content-floor .run-out-img').fadeOut();
	})

	//床品图片切换end

	//轮播图start
	var index = 0;
	var leng = $('.swrip .contain-i .img-over .imgae .img-item').length;
	$('.swrip .contain-i .btn-left').click(function(){
		index--;
		if(index < 0){
			$('.swrip .contain-i .img-over .imgae').css('margin-left',0);
			index = 0;
			return ;
		}
		$('.swrip .contain-i .img-over .imgae').animate({'margin-left':-960*index},500);
	})	
	$('.swrip .contain-i .btn-right').click(function(){
		index++;
		if(index > leng/4 -1){
			$('.swrip .contain-i .img-over .imgae').css('margin-left',-960*(leng/4 - 1));
			index = leng/4 - 1;
			return ;
		}
		$('.swrip .contain-i .img-over .imgae').animate({'margin-left':-960*index},500);
	})

	//轮播图end

	var data = [
			{"id":1,"img":"60.png","title":"加厚夹棉保暖四件套","price":"559.00","color":"1.8M 深蓝海洋","num":2},
			// {"id":2,"img":"61.png","title":"加厚夹棉","price":"1233.00","color":"1.8M 深蓝海洋","num":3},
			// {"id":3,"img":"62.png","title":"加厚夹棉三百多分","price":"39.00","color":"1.8M 深蓝海洋","num":5}
		];
	var str = '';
	data.forEach(function(value,key){
		str += '<li class="car-item">';
		str += '<img src="./assets/images/show.img/'+value.img+'" alt="">';
		str += '<div class="cont-tit">';
		str += '<a href="">'+value.title+'</a>';
		str += '¥<span class="dan-pri">'+value.price+'</span>';
		str += '<span class="remove-sp">X</span>';
		str += '</div>';
		str += '<p class="color-co">'+value.color+'  x<span class="cont-numb">'+value.num+'</span></p>';
		str += '</li>';
	})	
	// $('.out-logo .logo .logo-top .search .car-box .slide-d .car-contents').html(str);
	$('.bed-project .may .shop-car').click(function(){
		$('.slide-d').stop(true,true);
		$(str).prependTo($('.car-contents'))
		$('.slide-d').slideDown(1000).delay(2000).slideUp(1000);
		zongji();

	})
	$('.out-logo .logo .logo-top .search .car-box .slide-d').mouseenter(function(){
		$(this).stop(true).slideDown(1000);
	})
	$('.out-logo .logo .logo-top .search .car-box').mouseenter(function(){
		$(this).children('.slide-d').show();
	}).mouseleave(function(){
		$(this).children('.slide-d').slideUp(1000);
	})


	$('.car-contents').on('click','.remove-sp',function(){
		$(this).parents('.car-item').remove();
		zongji();
	})




	zongji();
	function zongji(){
		var sum = 0;
		var price = 0;
		$('.out-logo .logo .logo-top .search .car-box .slide-d .car-contents .car-item').each(function(){
			var priHe = Number($(this).find('.dan-pri').text());
			var numHe = Number($(this).find('.cont-numb').text());
			sum += numHe;
			price += priHe*numHe;
		})
		$('.out-logo .logo .logo-top .search .car-box .slide-d .car-cont-bot .cont-money').text(price.toFixed(2));
		$('.out-logo .logo .logo-top .search .car-box .sp-num').text(sum);
	}

















 	})