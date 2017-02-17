/**
 * related to page3.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-13
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");  

page.on("back",function(){
	app.closePage();
}); 

ui("do_Button_1").on("touch",function(data){
	 
		app.closePage();//普通的关闭
		
});  
ui("do_Button_2").on("touch",function(data){ 
	
	deviceone.print("11");
	app.closePageToID({
		id:"app_page2"
	},function(){
		deviceone.print("12");
	});//关闭到指定ID，app_main
	
	
	
});  