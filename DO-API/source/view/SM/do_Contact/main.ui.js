/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-26
 */

var app = sm("do_App");
var page = sm("do_Page");

var contact=sm("do_Contact");

var target1=ui("do_Button_1");

target1.on("touch",function(data,e){ 
	
	contact.getData( function(data, e) {
		deviceone.print(JSON.stringify(data),typeof(data));
	}) 
});

var target2=ui("do_Button_2");

target2.on("touch",function(data,e){ 
	
	contact.getDataById("89", function(data, e) {
		deviceone.print(JSON.stringify(data),typeof(data));
	}) 
});

