/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2017-1-12
 */ 
 var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

/**************/

//定义ProgressBar对象
var target_1 = ui("do_IconFont_5");
var target_2 = ui("do_IconFont_6");
var target_3 = ui("do_IconFont_7");
var target_4 = ui("do_IconFont_8");

//在touch事件中同时给iconName、iconCode、iconSize、iconColor属性赋值来指定图库、图标、大小和颜色
target_1.on("touch",function(){
	target_1.iconName = "health";
	target_1.iconCode = "e625";
	target_1.iconColor = "FF0000FF";
	target_1.iconSize = "150";
})

target_2.on("touch",function(){
	target_2.iconName = "health";
	target_2.iconCode = "e625";
	target_2.iconColor = "FFFF00FF";
	target_2.iconSize = "170";
})


target_3.on("touch",function(){
	target_3.iconName = "health";
	target_3.iconCode = "e625";
	target_3.iconColor = "0080FFFF";
	target_3.iconSize = "190";
})


target_4.on("touch",function(){
	target_4.iconName = "health";
	target_4.iconCode = "e625";
	target_4.iconColor = "008000FF";
	target_4.iconSize = "210";
})


