/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-26
 */

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 


//定义Button对象
var target_1 = ui("do_Button_1");
var target_2 = ui("do_Button_2");


var camera = sm("do_Camera");

target_1.on("touch",function(data,e){
	
	camera.capture({
		"width":100,
		"height":100,
		"quality":100,
		"iscut":true, 
		"facingFront":true,
		function(data,e){ 
			
		}
	}); 
});

target_2.on("touch",function(data,e){
	
	camera.capture({
		"width":100,
		"height":100,
		"quality":100,
		"iscut":false, 
		"facingFront":false,
		function(data,e){
			
			
		}
	}); 
});