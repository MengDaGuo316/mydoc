var iNow=0;
var timer;
$('.carousel-btns li').on('click',function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	$('.carousel-imgs').animate({
		left:-960*$(this).index()
	},1000)
});
run();
$('.carousel').on('mouseover',function(){
	clearInterval(timer);
}).on('mouseout',function(){
	run();
});
function run(){
	timer=setInterval(function(){
		iNow++;
		if(iNow==$('.carousel-btns li').length){
			iNow=0;
		}
		$('.carousel-btns li').eq(iNow).trigger('click');
	},2000)
}