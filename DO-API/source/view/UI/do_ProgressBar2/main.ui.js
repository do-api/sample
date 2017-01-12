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

//定义ProgressBar1对象
var target_1 = ui("do_ProgressBar2_1");
var target_2 = ui("do_ProgressBar2_2");

//修改progress属性为20，只对style为normal有效
target_1.progress = 20;

//修改progressWidth属性
target_1.progressWidth = 30;

//修改text属性，设置进度条中间显示的文字
target_1.text = "测试进度条"
	
//修改fontColor属性，设置进度条中间显示文字的颜色
target_1.fontColor = "0080FFFF";
	
//修改fontSize属性，设置进度条中间显示文字的大小
target_1.fontSize = "25";

//修改progressColor属性，给do_ProgressBar_2的四个小圆点单独设置颜色
target_2.progressColor = "00FF00FF";

//修改progressBgColor属性
target_2.progressBgColor = "FFFF00FF";
