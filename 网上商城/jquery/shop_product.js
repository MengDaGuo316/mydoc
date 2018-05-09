
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
