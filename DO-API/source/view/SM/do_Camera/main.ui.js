/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-26
 */

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

// 定义Button对象
var target_1 = ui("do_Button_1");
var target_2 = ui("do_Button_2");
var iv = ui("iv")

var camera = sm("do_Camera");


deviceone.print("ffdf", "f33")
target_1.on("touch", function(data) {
//	camera.capture(1000, -1, 60, function(data, e) {
//		deviceone.print(JSON.stringify(data), "fdfd")
//		iv.source = data;
//	});
	camera.capture(1000, -1, 60, false, function(data) {
		deviceone.print(JSON.stringify(data), "fdfd")
		iv.source = data;
	});
});

target_2.on("touch", function(data) {
	camera.capture({
		"width" : 100,
		"height" : 100,
		"quality" : 100,
		"iscut" : true,
		"facingFront" : false
	}, function(data, e) {
		deviceone.print(JSON.stringify(data), "yy")
		iv.source = data;
	});
});