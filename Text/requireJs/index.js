var screenWidth=document.documentElement.clientWidth||document.body.clientWidth;
var screenHeight=document.documentElement.clientHeight||document.body.clientHeight;
// 属性：大小 位置 速度
// 方法：初始化 下落
function Leaf(){
	this.width=Math.random()*50+100;
	this.pos={
		top:0,
		left:Math.random()*(screenWidth-this.width)
	}
	this.speed=5;
	
	this.img=new Image();
	this.img.src='img/'+(Math.floor(Math.random()*4)+1)+'.png';
	this.img.style.width=this.width+'px';
	this.img.style.left=this.pos.left+"px";
};

Leaf.prototype.init=function(){
	document.body.appendChild(this.img);
};

Leaf.prototype.fall=function(){
	var _this=this;
	setTimeout(function(){
		var timer=setInterval(function(){
			if(_this.img.offsetTop>screenHeight-_this.img.height){
				clearInterval(_this.timer);
			}else{
				_this.img.style.top=_this.img.offsetTop+_this.speed+"px";
			}
		},30)
	},Math.random()*1000);

};
var aLeaf=[];
for(var i=0;i<7;i++){
	var oLeaf=new Leaf();
	oLeaf.init();
	aLeaf.push(oLeaf);
}
document.onclick=function(){
	for(var i=0;i<aLeaf.length;i++){
		aLeaf[i].fall();
	}
	
}
