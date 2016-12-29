/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-29
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

/***************************/
//定义do_iFlyVoice实例
var target_1 = sm("do_iFlyVoice");

var do_TextBox_1 = ui("do_TextBox_1");
var do_TextBox_2 = ui("do_TextBox_2");

var do_Button_5 = ui("do_Button_5");


var do_Button_1 = ui("do_Button_1");
var do_Button_3 = ui("do_Button_3");
var do_Button_2 = ui("do_Button_2");
var do_Button_4 = ui("do_Button_4");

do_TextBox_1.text = "DeviceOne是一个专业的移动应用开发平台，它可以帮助我们重用原生代码、提高开发效率、降低开发成本、让普通的程序员也可以轻松生成具备原生体验效果的高品质App。拥有业内最先进技术框架、最优秀最具创新力和战斗力的技术团队、打造最开放最强大的移动应用开发平台，DeviceOne值得您期待!";

// ////////注册(订阅) iFlayVoice 事件
var nf = sm("do_Notification");
//注册 begin 事件，当合成完成后，开始播放时触发
target_1.on("begin", function(data, e) {
	nf.toast("开始播放");
});
//注册 finished 事件，当播放完成时触发
target_1.on("finished", function(data, e) {
	nf.toast("播放完成");
});

do_Button_1.on("touch", function(data, e) {
	// 开始合成，合成完成自动播放 text:文本内容 role:文本朗读的角色 角色列表见 http://bbs.deviceone.net/forum.php?mod=viewthread&tid=32&extra=
	target_1.speak(do_TextBox_1.text, "xiaoyan")
});

do_Button_2.on("touch", function(data, e) {
	//暂停播放
	target_1.pause();
});

do_Button_3.on("touch", function(data, e) {
	//继续播放
	target_1.resume();
});

do_Button_4.on("touch", function(data, e) {
	//结束播放
	target_1.stop();
});

do_Button_5.on("touch", function(data, e) {
	// 打开语音识别界面
	target_1.open(function(data, e) {
		if (data != null) {
			// 语音识别过后的文本结果
			do_TextBox_2.text = data.result;
			// 语音识别过后的拼音结果
			// do_TextBox_2.text = data.spell;
		}
	});
})
