/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-26
 */

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 

var  target=sm("do_External");

//bulkSMS	打开发送短信界面，支持群发短信	同步方法
ui("do_Button_1").on("touch",function(data){ 
	target.bulkSMS(); 
}); 
//existApp	应用是否安装	同步方法
ui("do_Button_2").on("touch",function(data){ 
	target.existApp(); 
}); 
//installApp	安装app	同步方法
ui("do_Button_3").on("touch",function(data){ 
	target.installApp(); 
}); 
//openApp	启动第三方应用	同步方法
ui("do_Button_4").on("touch",function(data){ 
	//打开微信
	target.openApp({
		 "wakeupid":"om.tencent.mm"  
	 }); 
}); 
//openContact	打开系统通讯录界面	同步方法
ui("do_Button_5").on("touch",function(data){ 
	target.openContact(); 
}); 
//openDial	打开拨号界面	同步方法 
ui("do_Button_6").on("touch",function(data){ 
	target.openDial({"number":10086});
}); 
//openFile	打开外部文档	同步方法
ui("do_Button_7").on("touch",function(data){ 
	
	target.openFile("data://do_External/file.txt"); 
});
//openMail	打开发送邮件界面	同步方法
ui("do_Button_8").on("touch",function(data){ 
	target.openMail({"to":"doservice@deviceone.net","subject":"do-api-openMail邮件标题","body":"do-api，external.openMail邮件内容测试"}); 
});
//openSMS	打开发送短信界面	同步方法
ui("do_Button_10").on("touch",function(data){  
	target.openSMS({ "number":"10086","body":"testing"});
});
//openSystemSetting	打开系统设置界面	同步方法 
ui("do_Button_9").on("touch",function(data){ 
	target.openSystemSetting({"type":"GPS"}); 
});
//openURL	调用系统默认浏览器	同步方法   
ui("do_Button_10").on("touch",function(data){ 
	target.openURL("http://www.deviceone.net"); 
});
 