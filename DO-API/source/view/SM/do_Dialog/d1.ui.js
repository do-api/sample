/**
 * related to d1.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-28
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 

var target1 = sm("do_Dialog");//实例化一个位图对象 
var pata=target1.getData();//获取信息

ui("do_Label_2").set("text",JSON.stringify(pata)+"返回值类型为："+typeof(pata));//赋值

ui("do_ImageView_2").on("touch", function(data, e) {
	target1.close("supportClickClose，支持点击关闭");
})