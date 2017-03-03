/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-03
 */
var  app=ui("do_App");
var  page=ui("do_Page");

var target=ui("do_WebView_1");
 

/**
 * 属性
 **/ 


/**
 * 方法
 **/


/**
 * hello
 * 事件
 **/

target.on("failed", function(data, e) {
	
});


target.on("loaded", function(data, e) {
	
});

target.on("pull", function(data, e) {
	
});


/**
 * 页面展示
 * 
 */
function resultshow(data) {
	ui("do_Label_2").set("text", data);
}