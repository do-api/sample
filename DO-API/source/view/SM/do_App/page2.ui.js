/**
 * related to page2.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-13
 */ 

var app = sm("do_App");
var page = sm("do_Page");

page.on("back",function(){
	app.closePage();
}); 


ui("do_Button_1").on("touch",function(data){
	 
		app.openPage("source://view/SM/do_App/page3.ui");//普通的打开
		
}); 