/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-19
 */ 
var nf = sm("do_Notification");

var startBtn = ui("startBtn");
var stopBtn = ui("stopBtn");
var isStartBtn = ui("isStartBtn");

var mLabel = ui("mLabel");

// 创建一个定时器组件
var target_1 = mm("do_Timer");
//target_1 = mm("do_Timer", "timerId", "app");//创建App级别的计时器 timer;

// 延时启动时间,0表示立即执行
target_1.delay = 0;

// 间隔时间,定时器将每隔指定豪秒时间触发一次事件,单位毫秒
target_1.interval = 1000;

var maxVal = 59;

startBtn.on("touch", function(data, e) {
	// 判断当前Timer是否在执行,如果当前没有执行,就开启Timer
	if (!target_1.isStart()) {
		target_1.start();
		nf.toast("定时器开始执行");
	} else {
		nf.toast("当前定时器正在执行");
	}
});

stopBtn.on("touch", function(data, e) {
	// 判断当前Timer是否在执行,如果当前正在执行,就停止Timer
	if (target_1.isStart()) {
		target_1.stop();
		nf.toast("定时器结束执行");
	}
});

isStartBtn.on("touch", function(data, e) {
	// 判断当前Timer是否正在执行
	var isStart = target_1.isStart();
	nf.toast("当前Timer" + (isStart ? "正在运行" : "停止运行"));
});

// 订阅(注册)tick事件,每隔固定时间(target_1.interval)执行一次
target_1.on("tick", function(data, e) {
	mLabel.text = maxVal--;
	if (maxVal < 0) {
		nf.toast("时间到");
		maxVal = 59;
		target_1.stop();
	}
});
