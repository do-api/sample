/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-29
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var img = ui("do_ImageView_1");

/***************************/
//实例化一个位图对象
var target_1 = mm("do_Bitmap");

ui("do_Button_1").on("touch",function(){
	//loadFile	加载位图的同时将位图保存到内存中并加载到ImageView中
	target_1.loadFile({source:"source://view/MM/do_Bitmap/image/img1.jpg"},function(data,e){
		nf.alert(data,"加载是否成功");
	});	
	
});

ui("do_Button_2").on("touch",function(){
	//save	保存位图
	target_1.save({format:"PNG",quality:100,outPath:"data://do_Bitmap"},function(data,e){
		nf.alert(data,"返回路径");	
		img.source = data;
	});

});

ui("do_Button_3").on("touch",function(){
	//toFrostedGlass	转成毛玻璃位图
	target_1.toFrostedGlass({degree:10}, function(data, e) {
		nf.alert(data,"是否转换成功");
	});	
});

ui("do_Button_4").on("touch",function(){
	//toRoundCorner	添加圆角
	target_1.toRoundCorner({radius:20}, function(data, e) {
		nf.alert(data,"是否转换成功");
	})
});


ui("do_Button_5").on("touch",function(){
	//toGrayScale	转成灰色位图
	target_1.toGrayScale(function(data, e) {
		nf.alert(data,"是否转换成功");
	})
});

ui("do_Button_6").on("touch",function(){
	//getExif	获取图片拍摄信息
	var data = target_1.getExif({source:"source://view/MM/do_Bitmap/image/123.JPG"});
	nf.alert(JSON.stringify(data),"getExif");
});



