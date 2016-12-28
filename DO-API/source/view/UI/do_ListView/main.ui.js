/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-28
 */
var app=sm("do_App");
var page=sm("do_Page");

 var  btn2=ui("do_Button_2");
 
 btn2.on("touch",function(data){
	 app.openPage("source://view/UI/do_ListView/moretemplate/main.ui" );  
 });