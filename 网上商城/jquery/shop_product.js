
// 下拉
var $selbtn=$('.sel-btn'),
	$selmenu=$('.sel-menu');
// $('sel-btn').on('mousedown',function(){
// 	$('#select-box').addClass('selected');
// });
// $('sel-btn').on('mouseup',function(){
// 	$('#select-box').removeClass('selected');
// 	$('sel-menu').toggle();
// });
$selbtn.on('click',function(){
			$selmenu.toggle();
		});
		$('li',$selmenu).on('click',function(){
				
			$('p',$selbtn).html($(this).html());
			$selmenu.hide();
		});
		$(document).on('click',function(e){
			if(e.target!=$selbtn[0]&&e.target!=$('span',$selbtn)[0]&&e.target!=$('p',$selbtn)[0]){
				$selmenu.hide();
			}
		});


// 选项卡
$('.btns-box li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.tab-item').eq($(this).index()).show().siblings().hide();
});


// 弹层
var iNow;
$('.small-img li').on('click',function(){
	$('.dialog-box').show();
	$('.content').animate({
		top:'10%'
	},1000)
	$('.dialog-body img').attr('src',$(this).find('img').attr('src'));
	iNow=$(this).index();
});

$('.dialog-box').on('click',function(e){
	if(e.target==$('.dialog-box')[0] || e.target==$('.dialog-close')[0]){
		$(this).hide();
		$('.content').stop().css({
			top:'-250px'
		})
	}

});

$('.dialog-next').on('click',function(){
	iNow++;
	if(iNow==$('.small-img li').length){
		iNow=0;
	}
	var $nextImgSrc=$('.small-img li').eq(iNow).find('img').attr('src');
	$('.dialog-body img').eq(0).before('<img src="'+$nextImgSrc+'"></img>');
	$('.dialog-body img').eq(0).siblings().fadeOut(2000,function(){
		$(this).remove();
	})
})