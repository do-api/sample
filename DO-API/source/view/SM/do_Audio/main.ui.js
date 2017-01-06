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
 * stopRecordAsync	结束录音	异步方法  ---
 * pause	暂停播放	同步方法
 * play	开始播放	同步方法
 * resume	继续播放	同步方法
 * startRecord	开始录音	同步方法  ---
 * stop	停止播放	同步方法
 * stopRecord	结束录音	同步方法  ---
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

var  _path="";

//开始录音
ui("do_Button_1").on("Touch",function(data){
	audio.startRecord({path:"data://do_Audio",type:"mp3",quality:"normal",limit:-1})(function(data){ 
		 
		deviceone.print("开始录音");
	}); 
	resultshow("开始录音"); 
});
//暂停录音
ui("do_Button_2").on("Touch",function(data){
	audio.stop();
	resultshow("暂停录音"); 
});
//继续录音
ui("do_Button_3").on("Touch",function(data){
	audio.stop();
	resultshow("继续录音"); 
}); 
//结束录音
ui("do_Button_4").on("Touch",function(data){
	audio.stopRecordAsync(function(data, e) {
		
	});
	resultshow("结束录音"); 
});


//开始播放
ui("do_Button_5").on("Touch",function(data){
	audio.play({
		path:_path, 
		point:""
	}); 
	resultshow("开始播放"); 
});
//暂停播放
ui("do_Button_6").on("Touch",function(data){
	audio.stop();
	resultshow("暂停播放"); 
});
//继续播放
ui("do_Button_7").on("Touch",function(data){
	audio.resume();
	resultshow("继续播放"); 
});

//结束播放
ui("do_Button_8").on("Touch",function(data){
	audio.stop();
	resultshow("结束播放"); 
});
 

/********************************************/
function resultshow(res){
	var data="当前状态："+ res;
	ui("do_Label_3").set("Text",data);
	
}

 