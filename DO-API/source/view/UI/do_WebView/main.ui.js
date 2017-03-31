/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-03
 */
var app=sm("do_App");
var page=sm("do_Page");
//关闭页面
page.on("touch",function(data){
	app.closePage();
	
});

var target=ui("do_WebView_1");
 

/**
 * 属性
 **/ 


/**
 * 方法
 **/
 

/**
 * 事件
 **/

target.on("failed", function(data, e) {
	resultshow("失败事件回调函数参数:"+JSON.stringify(data)+"返回值类型："+typeof(data));
});


target.on("loaded", function(data, e) {
	resultshow("加载结束回调函数参数:"+JSON.stringify(data)+"返回值类型："+typeof(data));
});

target.on("pull", function(data, e) {
	resultshow("pull结束回调函数参数:"+JSON.stringify(data)+"返回值类型："+typeof(data));
});


/**
 * 页面展示
 * 
 */
function resultshow(data) {
	ui("do_Label_2").set("text", data);
}