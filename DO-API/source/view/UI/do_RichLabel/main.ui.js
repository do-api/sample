/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-28
 */
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

/***************************/
//定义RichLabel对象
var target_1 = ui("do_RichLabel_1");

//定义显示的文字
var TEXT = "字体高亮<font color=red><b>123456</b></font>789<h1>设置字体大小H1</h1>" +
		"<h2>设置字体大小H2</h2>" +
		"<h3>设置字体大小H3</h3>" +
		"<br><br>" +
		"打开链接：<a href=\"http://www.deviceone.net\">DeviceOne</a>" +
		"<br><br>" +
		"打开邮箱：<a href=\"mailto:460750014@qq.com\">邮箱@qq.com</a> " +
		"<br><br>" +
		"拨打电话：<a href=\"tel:10086\">tel:10086</a> " +
		"<br><br>" +
		"发送短信：<a href=\"sms:10086\">sms:10086</a>" +
		"<br><br>" +
		"我的自定义链接：<a id=\"mya\" tag=\"data\" href=\"#my\">点击我触发事件</a>"

//修改text属性，修改显示文字
target_1.text = TEXT;

//maxWidth、maxHeight属性为设计器属性，只能通过属性列表修改

/***************************/
target_1.on("linkTouch",function(data,e){
	nf.alert(data,"链接点击事件");
});
