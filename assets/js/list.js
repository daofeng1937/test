	$(function(){
	//图片加载
		$(window).scroll(function(){
			scrollLoad();
		})
		scrollLoad();
		function scrollLoad(){
			var scrollT = $(window).scrollTop();
			var clientHeight = $(window).height();
			$('.image-load').each(function(){
				if($(this).offset().top < scrollT + clientHeight){
					$(this).attr('src',$(this).attr('data-src'));
					$(this).removeClass('image-load');
					$(this).hide().fadeIn(500);
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

	//轮播图start
		var index = 0
		var leng = $('.background-b .swripe .swrip-in .swripe-img .img-item').length;
		var timer;
		run();
		function run(){			
			timer = setInterval(function(){
				$('.background-b .swripe .swrip-in .swripe-img .img-item').eq(index).fadeOut();
				$('.background-b .swripe .swrip-in .swripe-num .num-item').eq(index).removeClass('activer');
				index++;
				if(index>=leng){
					index = 0;
				}
				$('.background-b .swripe .swrip-in .swripe-img .img-item').eq(index).fadeIn();
				$('.background-b .swripe .swrip-in .swripe-num .num-item').eq(index).addClass('activer');
			},2000)
		}
		$('.background-b .swripe .swrip-in').mouseenter(function(){
			clearInterval(timer);
			$('.background-b .swripe .swrip-in .btn-left').show();
			$('.background-b .swripe .swrip-in .btn-right').show();
		}).mouseleave(function(){
			$('.background-b .swripe .swrip-in .btn-left').hide();
			$('.background-b .swripe .swrip-in .btn-right').hide();
			run();
		})
		$('.background-b .swripe .swrip-in .btn-left').click(function(){
			goback(function(){
				index = --index < 0 ? leng-1 : index;
			})

		})
		$('.background-b .swripe .swrip-in .btn-right').click(function(){
			goback(function(){
				index = ++index >=leng ? 0 : index;
			})

		})
		$('.background-b .swripe .swrip-in .swripe-num .num-item').mouseenter(function(){
			$('.background-b .swripe .swrip-in .swripe-num .num-item').eq(index).stop(true,true);
			var that = $(this).index();
			goback(function(){
				index = that;
			})
		})

		function goback(feng){
			$('.background-b .swripe .swrip-in .swripe-img .img-item').eq(index).fadeOut();
			$('.background-b .swripe .swrip-in .swripe-num .num-item').eq(index).removeClass('activer');
			feng();
			$('.background-b .swripe .swrip-in .swripe-img .img-item').eq(index).fadeIn();
			$('.background-b .swripe .swrip-in .swripe-num .num-item').eq(index).addClass('activer');
		}





	//轮播图end


	// 商品列表strat
	var data = [
				 {"id":0,"img":"./assets/images/list-sw/6.jpg","tit":"冬眠暖绒四件套","price":299,"jishuo":"纯棉拉舍尔，被窝享冬眠"},
				 {"id":1,"img":"./assets/images/list-sw/7.jpg","tit":"加厚夹棉保暖四件套","price":399,"jishuo":"纯棉拉舍尔，被窝享冬眠"},
				 {"id":2,"img":"./assets/images/list-sw/8.jpg","tit":"全棉色织绗缝多用件套","price":199,"jishuo":"纯棉拉舍尔，被窝享冬眠"},
				 {"id":3,"img":"./assets/images/list-sw/9.jpg","tit":"全棉色织磨毛","price":499,"jishuo":"纯棉拉舍尔，被窝享冬眠"},
				
			];
	sear(data);
	function sear(data){
		var str = '';
		data.forEach(function(value,key){
					str +='<li class="bed-item">';
					str +='<div class="bed-img">';
					str +='<a href=""><img class="image-load" data-src="'+value.img+'" alt=""></a>';
					str +='</div>';
					str +='<div class="bed-cont">';
					str +='<p class="cont-sp"><span>加价购</span></p>';
					str +='<h3 class="cont-tit"><a href="">'+value.tit+'</a></h3>';
					str +='<p class="cont-price">¥'+value.price+'</p>';
					str +='<p class="cont-pro">'+value.jishuo+'</p>';
					str +='</div>';
					str +='</li>';	
		})
		$('.shop-bed .bed-content').html(str);
	}
	$('.list-cen .list-cont .content-pr .list-price .item-a').click(function(){
		var addF = $(this).attr('data-jia');
		if(addF == 'true'){
			data.sort(function(a,b){
				return a.price - b.price;
			})
			$(this).attr('data-jia','false');
		}else if(addF == 'false'){
			data.sort(function(a,b){
				return b.price - a.price;
			})
			$(this).attr('data-jia','true');
		}
		sear(data);
	})






	// 商品列表end
	})