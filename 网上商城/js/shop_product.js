// var oTabBox=document.getElementById('tab-box'),
// 	aLi=oTabBox.getElementsByTagName('li'),
// 	aDiv=getClass('tab-item',oTabBox);
// 	for(var i=0;i<aLi.length;i++){
// 			aLi[i].index=i;
// 			aLi[i].onclick=function(){
// 				for(j=0;j<aDiv.length;j++){
// 					aDiv[j].style.display='none';
// 				}
// 			aDiv[this.index].style.display='block';
// 			}
// 	}

function getClass(clsName,context){
	var result = [];
	context = context || document;
	var arr = context.getElementsByTagName('*');
	for(var i=0; i<arr.length; i++){
		//class  保留字 .className
		//'aa bb' == 'aa'   'aacc'
		if(arr[i].className.indexOf(clsName) != -1){
			result.push(arr[i]);
		}
	}
	return result;
}

var oSelBox=document.getElementById('select-box'),
	oBtn=getClass('sel-btn',oSelBox)[0],
	oUl=getClass('sel-menu',oSelBox)[0],
	aOptions=oUl.getElementsByTagName('li'),
	oP = oBtn.getElementsByTagName('p')[0];
var oSpan = oBtn.getElementsByTagName('span')[0];

	oBtn.onclick=function(){
		if(oUl.style.display=='none'||oUl.style.display==''){
		oUl.style.display='block';
	}else{
		oUl.style.display='none'
	}
	}
	oBtn.onmousedown=function(){
		oSelBox.className='select-box selected';
	}
	oBtn.onmouseup=function(){
		oSelBox.className='select-box';
		if(oUl.style.display=='none'||oUl.style.display==''){
		oUl.style.display=='black';
	}else{
		oUl.style.display=='none'
	}

	}
	for(i=0;i<aOptions.length;i++){
		aOptions[i].onclick=function(){
			oP.innerHTML=this.innerHTML;
			oUl.style.display='none';
		}

	}
	document.onclick=function(e){
		var target=e.target||event.srcElement;
		if(target!=oP&&target!=oSpan&&target!=oBtn){
			oUl.style.display='none';
		}
	}
	



// 弹层
var oSmallImg = getClass('small-img')[0];
var oDialogBox=getClass('dialog-box')[0];
var aDialogLi = oSmallImg.getElementsByTagName('li');
var oDialogBody=getClass('dialog-body')[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0];
var oDialogClose=getClass('dialog-close')[0];
var oDialogPrev=getClass('dialog-prev')[0];
var oContent=getClass('content',oDialogBox)[0];
var oDialogNext=getClass('dialog-next')[0];
var iNow=0;
var oSlideBtn=getClass('slide-btn')[0];
for(var i=0;i<aDialogLi.length;i++){
	aDialogLi[i].index=i;
	aDialogLi[i].onclick=function(){
		var oImg=this.getElementsByTagName('img')[0];
		oDialogBox.style.display='block';
		oDialogImg.src=oImg.src;
		oContent.style.animation='show 1s ease forwards';
		// oContent.style.animation='show 1s ease forwards';
		iNow=this.index;
	}
}
// 关闭弹层
oDialogBox.onclick=function(e){
	var target=e.target||event.srcElement;
	if(target==oDialogBox||target==oDialogClose){
		oDialogBox.style.display='none';
	}
}

oDialogPrev.onclick=function(){
	iNow--;
	if(iNow==-1){
		iNow=aDialogLi.length-1;
	}
	var prevLi=aDialogLi[iNow];
	oDialogImg.src=prevLi.getElementsByTagName('img')[0].src;
}
oDialogNext.onclick=function(){
	iNow++;
	if(iNow==aDialogLi.length){
		iNow=0;
	}
	var prevLi=aDialogLi[iNow];
	oDialogImg.src=prevLi.getElementsByTagName('img')[0].src;
}
var timer='';
oSlideBtn.onclick=function(){
	if(timer){
		clearInterval(timer);
		timer='';
	}else{
		timer=setInterval(function(){
			oDialogPrev.onclick();
		},1000);
	}
	
}





	
		









































	
	