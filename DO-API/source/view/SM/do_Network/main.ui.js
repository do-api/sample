/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-28
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var result = ui("do_Label_2");

/***************************/
//定义Global对象
var target_1 = sm("do_Network");

//获取当前网络状态
ui("do_Button_1").on("touch",function(){
	var date1 = target_1.getStatus();
	result.text = date1;
})

//获取移动终端ip地址
ui("do_Button_2").on("touch",function(){
	var date2 = target_1.getIP();
	result.text = date2;
})

//获取物理地址，iOS平台不支持
ui("do_Button_3").on("touch",function(){
	var date3 = target_1.getMACAddress();
	result.text = date3;
})

//打开无线网络连接界面
ui("do_Button_4").on("touch",function(){
	target_1.openWifiSetting();
})

//获取wifi相关信息
ui("do_Button_5").on("touch",function(){
	target_1.getWifiInfo(function(data, e) {
		result.text = data;
	})
})

//订阅changed事件，监控网络状态
target_1.on("changed",function(data,e){
	result.text = "网络状态改变，当前状态为："+data;
})