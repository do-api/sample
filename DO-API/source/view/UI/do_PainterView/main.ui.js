/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-07
 */ 
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var storage = sm("do_Storage");
var album = sm("do_Album")

//定义SwitchView对象
var target_1 = ui("do_PainterView_1");

/**************/

//修改brushWidth属性为3，修改笔刷宽度为3个像素
target_1.brushWidth = 3;

//修改brushColor属性，修改笔刷颜色
target_1.brushColor = "0080FFFF";

/**************/
//定义回退操作按钮
var do_ImageView_1 = ui("do_ImageView_1");
do_ImageView_1.on("touch",function(){
	//回退操作
	target_1.undo();
})

//定义清空操作按钮
var do_ImageView_2 = ui("do_ImageView_2");
do_ImageView_2.on("touch",function(){
	//回退操作
	target_1.clear();
})

//定义保存操作按钮
var do_ImageView_3 = ui("do_ImageView_3");
do_ImageView_3.on("touch",function(){
	//保存成图片
	target_1.saveAsImage({"format":"PNG"},function(data){
		var img = data;
		var mytime = global.getTime();   //获取当前时间
		storage.copyFile({"source":img,"target":"data://"+mytime+".jpg"}, function(data1, e) {
			if(data1){
				var img_source = "data://"+mytime+".jpg";
//				do_ImageView_picture.source = img_source;
//				do_ImageView_picture.visible = true;
//				do_ImageView_picture.animate(img_anima);
				album.save(img_source)
				nf.alert("保存成功");
			}
		})
	})
})


//定义查看画板例子按钮
var do_Button_1 = ui("do_Button_1");
do_Button_1.on("touch",function(){
	app.openPage({source:"source://view/UI/do_PainterView/view/index.ui"}, function(data, e) {
		
	})
})