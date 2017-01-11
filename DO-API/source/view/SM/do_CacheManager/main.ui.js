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
/**
 * 只有两个非基类方法
 * clearImageCache	清除图片缓存	异步方法
 * getImageCacheSize	获取图片缓存	异步方法
 * */
 
//clearImageCache	清除图片缓存	异步方法

ui("do_Button_1").on("touch",function(data){
	
	target.clearImageCache(function(data, e) {
		var  res="清除图片返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data)
		resultshow(res);
		 
		
	})
});
//getImageCacheSize	获取图片缓存	异步方法

ui("do_Button_2").on("touch",function(data){
	
	target.getImageCacheSize(function(data, e) {
		var  res="获取图片缓存返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data)
		resultshow(res); 
	})
});

/***********************/
function resultshow(data){
	ui("do_Label_2").set("text",data);
}