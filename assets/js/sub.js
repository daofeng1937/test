	
	$(function(){
		        /*
        当用户名失去焦点的额时候，验证用户名是否正确
            1. 请用字母数字下划线命名
            2. 账号必须由字母开头
            3. 账号必须是6-18个字符
            4. 该账户已注册
        */
        //用户名判断start
        var a1 = false;
        var b1 = false;
		$('.container .sub-content .sub-username .user-inp .username').focus(function(){
			$(this).parent().addClass('success');
		}).blur(function(){
			var value = $(this).val().trim();
			if(value.length == 0){
				$(this).parent().removeClass('success falls');
				$('.container .sub-content .sub-username .user-none').html('');
				$('.container .sub-content .user-inp .username-addr').hide();
				a1 = false;
				return;
			}

			var content = $('.container .sub-content .user-inp .username-addr .addr-item:eq(0)').text();
			$(this).val(content);
			$('.container .sub-content .user-inp .username-addr').delay(200).hide(0);


			var reg1 = /^\w+$/;
			if(!reg1.test(value)){
				$(this).parent().removeClass('success').addClass('falls');
				$('.container .sub-content .sub-username .user-none').html('请用字母数字下划线命名');
				a1 = false
				return ;
			}
			var reg2 = /^[a-zA-Z]+/;
			if(!reg2.test(value)){
				$(this).parent().removeClass('success').addClass('falls');
				$('.container .sub-content .sub-username .user-none').html('账号必须由字母开头');
				a1 = false
				return ;
			}
			var reg3 = /^\w{6,18}$/;
			if(!reg3.test(value)){
				$(this).parent().removeClass('success').addClass('falls');
				$('.container .sub-content .sub-username .user-none').html('账号必须是6-18个字符');
				a1 = false
				return ;
			}
			$.post('./assets/js/php/sub-1.php',{username:value},function(msg){
				if(msg.success == 1){
					$(this).parent().addClass('falls');
					$('.container .sub-content .sub-username .user-none').html('该账户已经被注册');
					a1 = false
				}else{
					$(this).parent().addClass('success');
					$('.container .sub-content .sub-username .user-none').html('账户名可用');
					a1 = true;
				}
			},'json')
		}).keyup(function(){
			$('.container .sub-content .user-inp .username-addr').show();
			var tex = $(this).val();
			$('.container .sub-content .user-inp .username-addr .addr-item').children('span').text(tex);
			$('.container .sub-content .user-inp .reset-all').show();
		})
		$('.container .sub-content .user-inp .reset-all').click(function(){
			$('.container .sub-content .sub-username .user-inp .username').val('');
			$('.container .sub-content .user-inp').removeClass('success falls');
			$('.container .sub-content .sub-username .user-none').html('');
			$('.container .sub-content .user-inp .reset-all').hide();
		})
		$('.container .sub-content .user-inp .username-addr .addr-item').click(function(){
			var tex = $(this).text();
			$('.container .sub-content .sub-username .user-inp .username').val(tex);
		})
		//用户名判断end



		//密码判断start

		$('.container .sub-content .sub-password .pass-inp .password').focus(function(){
			$(this).parent().addClass('success');
		}).blur(function(){
			var value = $(this).val().trim();
			if(value == ''){
				$(this).parent().removeClass('success falls');
				$('.container .sub-content .sub-password .pass-none').html('');
				return;
			}
			var reg = /.{6,16}/;
			if(!reg.test(value)){
				$(this).parent().removeClass('success').addClass('falls');
				$('.container .sub-content .sub-password .pass-none').html('6-16密码,区分大小写');
			}else{
				$(this).parent().removeClass('falls').addClass('success');
				$('.container .sub-content .sub-password .pass-none').html('安全');
			}
			var reg1 = /^[0-9]{6,10}$/;
			if(reg1.test(value)){
				$(this).parent().removeClass('success').addClass('falls');
				$('.container .sub-content .sub-password .pass-none').html('密码过于简单');
			}
		})
		$('.container .sub-content .sub-password .pass-inp .password').keypress(function(){
			$('.container .sub-content .pass-inp .pass-all').show();
		})
		$('.container .sub-content .pass-inp .pass-all').click(function(){
			$('.container .sub-content .pass-inp .pass-all').hide();
			$('.container .sub-content .sub-password .pass-inp .password').val('');
			$('.container .sub-content .pass-inp').removeClass('success falls');
			$('.container .sub-content .sub-password .pass-none').html('');
		})
		//密码判断end

		//确认密码正确start
		$('.container .sub-content .again-inp .again-input').focus(function(){
			$(this).parent().addClass('success');
		})
		$('.container .sub-content .again-inp .again-input').blur(function(){
			var value = $(this).val().trim();
			if(value.length == 0){
				$(this).parent().removeClass('falls success');
				$('.container .sub-content .sub-again .again-none').html('');
				return;
			}
			var reg = /.{6,16}/;
			if(!reg.test(value)){
				$('.container .sub-content .sub-again .again-none').html('6-16密码,区分大小写');
				$(this).parent().addClass('falls');
				return;
			}
			var againValue = $(this).val();
			var passwordValue = $('.container .sub-content .sub-password .pass-inp .password').val();
			if(againValue != passwordValue){
				$('.container .sub-content .sub-again .again-none').html('密码不一致');

			}else{
				$(this).parent().addClass('success');
				$('.container .sub-content .sub-again .again-none').html('正确');
			}
		}).keypress(function(){
			$('.container .sub-content .again-inp .again-all').show();
		})
		$('.container .sub-content .again-inp .again-all').click(function(){
			$(this).hide();
			$(this).parent().removeClass('success falls');
			$('.container .sub-content .sub-again .again-none').html('');
			$(this).prev().val('');
		})



		//确认密码正确end
		//输入正确的手机号start






		//输入正确的手机号end
		$('.container .sub-content .phone .ph-input').focus(function(){
			$(this).parent('.phone').addClass('success');
		}).keyup(function(){
			$('.container .sub-content .phone .ph-reset').show();
			var tex = $(this).val().trim().slice(0,0);
			if(a1 != true){
				$(this).val(tex);
				$('.container .sub-content .sub-username .user-inp').addClass('falls');
				$('.container .sub-content .sub-username .user-none').html('请先输入账号');
				return;
			}
		}).blur(function(){

				var value = $(this).val().trim();
				if(value == ''){
					$(this).parent('.phone').removeClass('success falls');
					$('.container .sub-content .phone-ad .phone-none').html('');
					return;
				}
				console.log(value);
				var reg = /^(13[0-9]|14[57]|15[012356789]|17[35678]|18[0-9]|199)[0-9]{8}$/;
				if(!reg.test(value)){
					$(this).parent('.phone').removeClass('success falls').addClass('falls');
					$('.container .sub-content .phone-ad .phone-none').html('输入正确的手机号');
					return;
					}else{
					$(this).parent('.phone').removeClass('success falls').addClass('success');
					$('.container .sub-content .phone-ad .phone-none').html('正确');
				}
			})
		$('.container .sub-content .phone .ph-reset').click(function(){
			$(this).hide();
			$('.container .sub-content .phone .ph-input').val('');
			$('.container .sub-content .phone').removeClass('success falls');
			$('.container .sub-content .phone-ad .phone-none').html('');
		})

		var btn = true;
		$('.container .sub-content .sub-tk .btn').click(function(){
			if(btn == true){
				$(this).addClass('btn-back');
				btn = false;
			}else if(btn == false){
				$(this).removeClass('btn-back');
				btn = true;
			}
		})





		
	})