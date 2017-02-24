/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-24
 */
var app = sm("do_App");
var page = sm("do_Page"); 

ui("do_Button_1").on("touch",function(data){
	app.openPage("source://view/UI/do_CoverFlowView/one/index.ui");
	
});