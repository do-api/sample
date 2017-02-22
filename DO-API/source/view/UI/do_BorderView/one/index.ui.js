/**
 * @Author : deviceone
 * @Timestamp : 2016-06-22
 */
var nf = sm("do_Notification");
var page = sm("do_Page");
var app = sm("do_App");
var borderView = ui("do_BorderView_1");

page.on("back", function(data, e) {
	app.closePage();
})

page.on("redraw", function(data, e) {
	borderView.redraw();
})

