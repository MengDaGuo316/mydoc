
// dialog.js
// requirejs.config({
//     baseUrl: 'jquery/',
//     paths: {
//         jquery: 'jquery-1.12.4'
//     }
// });

// require(['jquery','dialog'],function($,dialog){
// 	$('.small-img li').on('click',function(){
// 		dialog.open({
// 			width:500,
// 			height:400,
// 			opacity:0.6,
// 			title:'hhh',
// 			content:'.div1'
// 		});

// 	});
// 	$('body').on('click','#login-btn',function(){
// 		alert('登录成功！');
// 	})
// });



// dialog1.js
requirejs.config({
    baseUrl: 'jquery/',
    paths: {
        jquery: 'jquery-1.12.4'
    }
});

require(['jquery','dialog1'],function($,Dialog){
	$('.small-img li').on('click',function(){
		var dialog1=new Dialog({
			width:500,
			height:400,
			opacity:0.6,
			title:'hhh',
			content:'.div1'
		})
		dialog1.open();

	});
	$('body').on('click','#login-btn',function(){
		var dialog2=new Dialog({
			width:300,
			height:200,
			opacity:0.6,
			title:'登录成功'
			
		})
		dialog2.open();
	})
});

