/**
 * related to main.ui
 * 
 * @Author : cxx
 * @Timestamp : 2016-12-06
 */ 
 
var target = ui("do_SeekBar_1"); 
var nf = sm("do_Notification");

var do_Button_1=ui("do_Button_1");

//展示相关
do_Button_1.on("touch", function(data, e) {    
    nf.alert("当前组件常见场景为音量调整");
})

/**
 * 当前组件相关 
 * 
 * */

var do_SeekBar_1 = ui("do_SeekBar_1"); //获取与实例化当前组件对象

/**
 * 组件--属性
 * progress
 * secondaryProgress
 * */
//
do_SeekBar_1.set("progress",10);
do_SeekBar_1.set("secondaryProgress",2);

/**
 * 组件--方法
 * 没有自己独特的方法，参考网址：http://store.deviceone.net/Documents/Base/UI.html#method
 * */ 
 
 
/**
 * 组件--事件
 * */
//点击事件
do_SeekBar_1.on("touch", function(data, e) {
	var a=target.progress;
    target.progress=a+10; 
	
    
}) 
//更改事件：进度变化时候触发
do_SeekBar_1.on("progressChanged", function(data) {
	deviceone.print("progressChanged");
	nf.toast("do_SeekBar_1更改了"+data);
}) 