var do_Global=sm("do_Global");
var do_App=sm("do_App");
var do_Page=sm("do_Page");
var do_Notification = sm("do_Notification");
var do_Storage = sm("do_Storage");
var do_Global = sm("do_Global")

var do_ALayout_root = ui("do_ALayout_root")


do_ALayout_root.on("touch",function(){
	do_Page.fire("start");
})