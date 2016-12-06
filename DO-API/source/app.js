/**
 * @Author : deviceone
 * @Timestamp : 2016-11-28
 */
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function () {
	app.openPage("source://view/index.ui");
});
