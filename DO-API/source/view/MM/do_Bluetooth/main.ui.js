/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-23
 */
var app = sm("do_App");
var page = sm("do_Page");
var blouetooth = mm("do_Bluetooth"); 


//定义Button对象
var target_1 = ui("do_Button_1");
var target_2 = ui("do_Button_2");


target_1.on("touch",function(data,e){
	
	var tag= blouetooth.open();
	
	deviceone.print(tag);
	if(tag){
		deviceone.print("打开成功"); 
	}
});

target_2.on("touch",function(data,e){
	var tag= blouetooth.close();
	if(tag){
		deviceone.print("关闭成功");
	}
});

