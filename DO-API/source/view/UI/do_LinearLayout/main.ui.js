/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-03
 */

var app=sm("do_App");
var page=sm("do_Page");

page.on("back", function(data, e) {
	app.closePage();
})