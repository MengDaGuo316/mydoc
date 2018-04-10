var oTbody=document.getElementsByTagName('tbody')[0];
var aTr=oTbody.getElementsByTagName('tr');
var oCheckAll=document.getElementById('checkAll');
var aCheckBtn=getClass('checkBtn',oTbody);

for(var i=0;i<aTr.length;i++){
	aTr[i].onclick=function(){
		var oCheckBox=this.getElementsByTagName('input')[0];
		if(this.className=='selected'){
			this.className='';
			
			oCheckBox.checked=false;
		}else{
			this.className='selected';
			
			oCheckBox.checked=true;
		}
	}
}

oCheckAll.onclick=function(){
	if(oCheckAll.checked==true){
		for(var i=0;i<aTr.length;i++){
			aTr[i].className='selected';
			aCheckBtn[i].checked=this.checked;
		}
	}else{
			for(var i=0;i<aTr.length;i++){
			aTr[i].className='';
			aCheckBtn[i].checked=this.checked;
		}
		}
}