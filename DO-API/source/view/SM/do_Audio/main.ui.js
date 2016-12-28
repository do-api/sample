/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-27
 */
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");

var nf = sm("do_Notification");

/** 方法
 * stopRecordAsync	结束录音	异步方法
 * pause	暂停播放	同步方法
 * play	开始播放	同步方法
 * resume	继续播放	同步方法
 * startRecord	开始录音	同步方法
 * stop	停止播放	同步方法
 * stopRecord	结束录音	同步方法
 * 
 * */
/** 事件
 * error	音频播放、录音错误时触发
 * playFinished	音频播放结束后触发
 * playProgress	
 * recordFinished	录音结束后触发
 * recordProgress	
 * recordVolume	录音音量变化事件 
 * */
//录制
var audio=sm("do_Audio");

var btn1=ui("do_Button_1"); 
btn1.on("touch",function(data){
	audio.startRecord(path, type, quality, limit)(function(data){
		
		deviceone.print("录音结束");
	});
	
});
//播放
var  btn2=ui("do_Button_2"); 
btn2.on("touch",function(data){
	audio.stopRecordAsync(function(data){ 
		deviceone.print("录音结束");
	}); 
});