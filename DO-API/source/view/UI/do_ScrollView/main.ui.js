/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-07
 */
var app=sm("do_App");
var page=sm("do_Page");

//关闭页面
page.on("touch",function(data){
	app.closePage();
	
});


ui("do_Button_1").on("touch", function(data) {
	app.openPage({
		source:"source://view/UI/do_ScrollView/test0.ui",
		statusBarState:"show",  
		statusBarBgColor:"#4B9EF9FF"
	}, function(data, e) {
		
	})
})
ui("do_Button_2").on("touch", function(data) {
	app.openPage("source://view/UI/do_ScrollView/test1.ui")
})
 
ui("do_Button_3").on("touch", function(data) {
	app.openPage("source://view/UI/do_ScrollView/test0.ui")
})


