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
var target_1 = sm("do_Global");

//用yyyy-MM-dd格式获取当前设备时间
ui("do_Button_2").on("touch",function(){
	var date1 = target_1.getTime({format:"yyyy-MM-dd"});
	result.text = date1;
})

//无格式获取当前设备时间，返回毫秒数
ui("do_Button_3").on("touch",function(){
	var date2 = target_1.getTime();
	result.text = date2;
})

//获取应用唤醒ID
ui("do_Button_4").on("touch",function(){
	var data_wakeupid = target_1.getWakeupID();
	result.text = data_wakeupid;
})

//获取应用安装包的版本号
ui("do_Button_5").on("touch",function(){
	var data_version = target_1.getVersion();
	result.text = data_version;
})

//设置全局变量值，用key来标示唯一性
ui("do_Button_6").on("touch",function(){
	target_1.setMemory({key:"abc", value:"Device One"});
	nf.alert("设置全局变量成功");
})

//使用对应key来获取全局变量值
ui("do_Button_7").on("touch",function(){
	var data_memory = target_1.getMemory({key:"abc"});
	result.text = data_memory;
})

//拷贝一个字符串到系统的粘贴板
ui("do_Button_8").on("touch",function(){
	var data_setresult = target_1.setToPasteboard({data:"Device One Tutorial"});
	result.text = data_setresult;
})

//从粘贴板取出内容
ui("do_Button_9").on("touch",function(){
	var data_getresult = target_1.getFromPasteboard();
	result.text = data_getresult;
})

//获取签名证书信息，仅支持Android平台
ui("do_Button_10").on("touch",function(){
	var data_setresult = target_1.getSignatureInfo();
	result.text = JSON.stringify(data_setresult);
})

//直接退出应用
ui("do_Button_11").on("touch",function(){
	target_1.exit();
})

//订阅background事件，在应用退到后台时触发
target_1.on("background",function(data,e){
	nf.alert("应用进入后台","tips");
})

//订阅foreground事件，应用回到前台时触发
target_1.on("foreground",function(data,e){
	nf.alert("应用回到前台","tips");
})

//订阅broadcast事件，并对不同情况单独处理
target_1.on("broadcast",function(data,e){
	if(data.type == "PACKAGE_ADDED"){
		nf.alert("安装应用","tips");
	}
	else if(data.type == "PACKAGE_REMOVED"){
		nf.alert("卸载应用","tips");
	}
	else if(data.type == 0){
		nf.alert("点亮屏幕","tips");
	}
	else if(data.type == 1){
		nf.alert("锁屏","tips");
	}
	else {
		nf.alert("解锁","tips");
	}
})