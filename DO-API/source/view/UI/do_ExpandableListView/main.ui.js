/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-22
 */
var d1 = require("deviceone");
var app = d1.sm("do_App");

var btn=ui("do_Button_1");

btn.on("touch", function () {
	app.openPage("source://view/UI/do_ExpandableListView/main1.ui");
});
