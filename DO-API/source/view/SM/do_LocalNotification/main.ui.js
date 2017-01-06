/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-1-6
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var currentdate;

//定义获取设备当前时间函数
function getNowFormatDate(){
var date = new Date();
var se1 = "-";
var se2 = ":";
var month = date.getMonth() + 1;
var strDate = date.getDate();
if (month >= 1 && month <= 9) {
    month = "0" + month;
}
if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
}
currentdate = date.getFullYear() + se1 + month + se1 + strDate
        + " " + date.getHours() + se2 + date.getMinutes()
        + se2 + date.getSeconds();
}
 
/***************************/
//定义LocalNotification实例
var target_1 = sm("do_LocalNotification");

ui("do_Button_1").on("touch",function(data,e){ 
	//获取设备当前时间
	getNowFormatDate();
	//定义一个立即触发、每隔一分钟提醒一次并包含自定义信息的本地通知
	target_1.addNotify({notifyTime:currentdate, notifyId:0, contentText:"起床", contentTitle:"提醒事项", extra:{'key1':'value1'}, repeatMode:"Minute"});
	nf.alert({text:"添加成功"}, function(data, e) {
		
	})
});

ui("do_Button_2").on("touch",function(data,e){ 
	//移除notifyID为id1的本地通知，注意参数类型为数组
	target_1.removeNotify({notifyIds:[0]});
});

/***************************/
//localNotification的message和messageClicked事件需要订阅在app.js中才起效

