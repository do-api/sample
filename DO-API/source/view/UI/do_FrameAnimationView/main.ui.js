/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-23
 *更多详细说明参考组件商店：http://store.deviceone.net
 */
var app = sm("do_App");
var page = sm("do_Page");  
/**
 *
 * startGif	开始动画	同步方法
 * startImages	开始动画	同步方法
 * stop	结束动画	同步方法
 * 
 * 
 * */
//startGif	开始动画	同步方法
//startImages	开始动画	同步方法
//stop	结束动画	同步方法
var btn=ui("do_Button_1");
var target=ui("do_FrameAnimationView_1");
ui("do_Button_1").on("touch",function(data){
	
	target.startGif({
		data:"source://view/UI/do_FrameAnimationView/image/15 08.21.04.gif",
		repeat: -1
	});
	//data 支持data://, source://路径
	//repeat  -1 表示无限循环
	//15 08.21.04.gif
	
});


