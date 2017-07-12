/**
 * related to test.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-07-07
 */
var do_Button_1 = ui("do_Button_1")
var do_Button_2 = ui("do_Button_2")
var do_Button_3 = ui("do_Button_3")
var loc = sm("do_LocalNotification");

do_Button_1.on("touch",function(){
	deviceone.print("01")
	loc.addNotify("2017-07-07 18:02:00", "notice0001", "提示1")
})
do_Button_2.on("touch",function(){
	deviceone.print("02")
	loc.addNotify("2017-07-07 18:03:00", "notice0002", "提示2")
})
do_Button_3.on("touch",function(){
	deviceone.print("03")
	loc.addNotify("2017-07-07 18:04:00", "notice0003", "提示3")
})
ui("do_Button_4").on("touch",function(){
	deviceone.print("04")
	loc.removeNotify()
})