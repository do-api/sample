/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-09
 */ 

var app = sm("do_App");
var page = sm("do_Page");

var nf = sm("do_Notification");
var target = sm("do_CacheManager");

 
//clearImageCache	清除图片缓存	异步方法

ui("do_Button_1").on("touch",function(data){
	
	target.clearImageCache(function(data, e) {
		deviceone.print("clearImageCache:");
	})
});
//getImageCacheSize	获取图片缓存	异步方法

ui("do_Button_2").on("touch",function(data){
	
	target.getImageCacheSize(function(data, e) {
		deviceone.print("getImageCacheSize");
	})
});