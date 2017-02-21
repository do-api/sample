/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-21
 */

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");  

page.on("back",function(){
	app.closePage();
}); 

/**
 * datacache 缓存一些数据到本地文件，即使程序退出再进入还能获取到值，要确保设置的value值不要过大
 * 
 ***/
var target=sm("do_DataCache");
//hasData	是否有数据	同步方法
ui("do_Button_1").on("touch",function(data){
	 var res = target.hasData("a");
	 
	resultshow("判断key为'a'的值是否存在："+res);
});
//loadData	读数据	同步方法
ui("do_Button_2").on("touch",function(){
	target.loadData("a",function(data){
		deviceone.print("读取成功！");
		resultshow("读取key为'a'的返回值类型为："+typeof(data)+",读取的内容为："+JSON.stringify(data));
	});
	
});
//removeAll	删除全部数据	同步方法
ui("do_Button_3").on("touch",function(){
	target.removeAll();
	
});
//removeData	删除数据	同步方法
ui("do_Button_4").on("touch",function(data){
	var res= target.removeData("a");
	resultshow("删除key为'a'的值，返回值类型为："+typeof(res)+",返回值为："+JSON.stringify(res));
});
//saveData	写数据	同步方法
ui("do_Button_5").on("touch",function(){
	target.saveData({"key":"a","value":"datacache"});
	
});

/**********************************************************************/
function resultshow(data){
	ui("do_Label_2").set("text",data);
	
}