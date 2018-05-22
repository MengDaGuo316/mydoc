requirejs.config({
    baseUrl:'jquery/',
    paths:{
        jquery:'jquery-1.12.4'
    }
});

define(['jquery'],function($){

  function Dialog(option){
    var _this=this;
            var defaultVal={
                width:500,
                height:400,
                opacity:0.6,
                content:''
            };
            option=$.extend(defaultVal,option);
             this.$dialogBox=$('<div class="dialog-box"></div>').css('background','rgba(0,0,0,'+option.opacity+')');
            this.$content=$('<div class="content"></div>').css({
                        width:option.width,
                        height:option.height,
                        marginLeft:-option.width/2,
                        marginTop:-option.height/2
            });
             this.$dialogTitle=$('<div class="dialog-title"></div>');
            this.$dialogTxt=$('<span class="title">'+option.title+'</span>');
             this.$dialogClose=$('<span class="dialog-close">X</span>').on('click',function(){
                _this.close();
             });;
            this.$dialogBody=$(' <div class="dialog-body"></div>').html($(option.content).clone().show());
  }
  Dialog.prototype.open=function(){
              
           

            this.$content.appendTo(this.$dialogBox);
            this.$dialogTitle.appendTo(this.$content);
           this. $dialogBody.appendTo(this.$content);
            this.$dialogTxt.appendTo(this.$dialogTitle);
            this.$dialogClose.appendTo(this.$dialogTitle);
            this.$dialogBox.appendTo($('body'));

  }
   Dialog.prototype.close=function(){
            this.$dialogBox.remove();
  }
    return Dialog
})
