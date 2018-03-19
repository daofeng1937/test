	$(function(){
	//图片加载
		// $(window).scroll(function(){
		// 	getLoad();
		// })
		// getLoad();
		// function getLoad(){
		// 	var scrollTop = $(window).scrollTop();
		// 	var clientHeight = $(window).height();
		// 	$('.img-load').each(function(){
		// 		var offHeight = $(this).offset().top;
		// 		if(offHeight < scrollTop + clientHeight){
		// 			$(this).attr('src',$(this).attr('data-src'));
		// 			$(this).removeClass('img-load');
		// 			$(this).hide().fadeIn();
		// 		}
		// 	})
		// }


		// .css('background-color','red');
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


	var data =[
			{"id":1,"img": "2.png","title":"智能温控手冲壶","price":"398.00","dat":"预计12月25日发货","num":"1","sum":"398.00"},
			{"id":2,"img": "3.png","title":"网易智造减压按摩腰靠","price":"269.00","dat":"预计12月25日发货","num":"1","sum":"269.00"},
			{"id":3,"img": "4.png","title":"小馒头 多色双肩包","price":"269.00","dat":"","num":"1","sum":"269.00"}
		];

	var str = ''
	data.forEach(function(value,key){
		str += '<ul class="midd-cont midd-write">';
			str += '<li class="midd-item">';
				str += '<input class="default" type="checkbox">';
			str += '</li>';
			str += '<li class="midd-item1 midd-change">';
				str += '<ul class="item1-cont">';
					str += '<li class="co-img">';
						str += '<img src="./assets/images/cart-img/'+value.img+'" alt="">';
						str += '<div class="img-box">';
							str += '<p class="co-tit"><a href="">'+value.title+'</a></p>';
							str += '<p class="co-col">800ml </p>';
							str += '</div>';
					str += '</li>';
					str += '<li class="co-price">';
						str += '<p class="co-pri">¥<span class="dan-price">'+value.price+'</span></p>';
						str += '<p class="co-price-data">'+value.dat+'</p>';
					str += '</li>';
					str += '<li class="move-add">';
						str += '<div class="num-box">';
							str += '<span class="c-move"> - </span>';
							str += '<input class="c-num" type="text" name="num" value="'+value.num+'">';
							str += '<span class="c-add"> + </span>';
						str += '</div>';
					str += '</li>';
					str += '<li class="small-ji">';
						str += '<p>¥<span>'+(value.price*value.num).toFixed(2)+'</span></p>';
					str += '</li>';
					str += '<li class="cot-make">';
						str += '<p class="cot-to">移入收藏夹</p>';
						str += '<p class="cot-reset">删除</p>';
					str += '</li>';
				str += '</ul>';
			str += '</li>';
		str += '</ul>';
	})
	$('.cart .midd-inner').html(str);

	/*
	购物车：
	1. ++ -- 删除
	2. 计算总价格和总数量
	3. 全选和全不选
    */
    $('.midd-write .midd-change .move-add .c-move').click(function(){
    	var num = $(this).next().val();
    	num--;
    	if(num < 1){
    		return;
    	}
    	$(this).next().val(num);
    	var price = $(this).parents('.move-add').prev().find('.dan-price').text();
    	$(this).parents('.move-add').next().find('span').text((price*num).toFixed(2));
    	user();
    })
     $('.midd-write .midd-change .move-add .c-add').click(function(){
     	var num = $(this).prev().val();
     	num++;
     	if(num > 50){
     		return;
     	}
     	$(this).prev().val(num);
     	var price = $(this).parents('.move-add').prev().find('.dan-price').text();
     	$(this).parents('.move-add').next().find('span').text((price*num).toFixed(2));
     	user();
     })
     $('.midd-write .midd-change .item1-cont .cot-make .cot-reset').click(function(){
     	$(this).parents('.midd-write').remove();
     	user();
     })
     $('.cart .top-cart .cheb').click(function(){
     	var check = $(this).prop('checked');
     	$('.default').prop('checked',check);
     	user();
     })
     $('.midd-write .midd-item .default').click(function(){
     	user();
     })


     user();
	function user(){
	     var price = 0;
	     var num = 0;
	     $('.midd-write').each(function(){
	     	if($(this).find('.default').prop('checked')){
	     		var danP = $(this).find('.dan-price').text();
	     		var numN = Number($(this).find('.c-num').val());
	     		price += danP*numN;
	     		num += numN;
	     	}
	     })
	     $('.cart .bottom-sub .botm-item1 .item1-num').text(num);
	     $('.cart .bottom-sub .botm-item3 .money-sp3').text((price).toFixed(2));
	}






















    // $('.midd-write .midd-change .item1-cont .move-add .c-move').click(function(){
    // 	var inputValue =  $(this).next().val();
    // 	inputValue--;
    // 	if(inputValue < 1){
    // 		return;
    // 	}
    // 	$(this).next().val(inputValue);
    // 	var price = $(this).parents('.move-add').prev().find('span').text();
    // 	$(this).parents('.move-add').next().find('span').text(price*inputValue);
    // 	cale();
    // })
    // $('.midd-write .midd-change .item1-cont .move-add .c-add').click(function(){
    // 	var inputAdd = $(this).prev().val();
    // 	inputAdd++;
    // 	if(inputAdd > 50){
    // 		return;
    // 	}
    // 	$(this).prev().val(inputAdd);
    // 	var price = $(this).parents('.move-add').prev().find('span').text();
    // 	$(this).parents('.move-add').next().find('span').text(price*inputAdd);
    // 	cale();
    // })
    // $('.midd-write .midd-change .item1-cont .cot-make .cot-reset').click(function(){
    // 	$(this).parents('.midd-write').remove();
    // 	cale();
    // })
    // $('.midd-write .midd-item .default').click(function(){
    // 	cale();
    // })
    // $('.cart .top-cart .top-item .cheb').click(function(){
    // 	var check = $(this).prop('checked');
    // 	 $('.midd-write .midd-item .default').prop('checked',check);
    // 	 $('.cart .bottom-sub .default').prop('checked',check);
    // 	 cale();
    // })
    // cale();
    // function cale(){
	   // 	var price = 0;
	   // 	var sum = 0;

	   // 	$('.midd-write').each(function(){
	   // 		if($(this).find('.default').prop('checked')){
	   // 			var everyPri = $(this).find('.dan-price').text();
	   // 			var everyNum = Number($(this).find('.c-num').val());
	   // 			price += everyPri*everyNum ;
	   // 			sum += everyNum;
	   // 		}
	   // 	})
	   // 	$('.cart .bottom-sub .botm-item1 .item1-num').text(sum);
	   // 	$('.cart .bottom-sub .botm-item3 .money-sp3').text(price);
    // }




























	//大家都在看start
	$('.sweripr .swer-left').click(function(){
		$('.sweripr .swer-content .swer-shop').animate({'margin-left':-920},1000)
	})
	$('.sweripr .swer-right').click(function(){
		$('.sweripr .swer-content .swer-shop').animate({'margin-left':0},1000)
	})


	//大家都在看end












	})