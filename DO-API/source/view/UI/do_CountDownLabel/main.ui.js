/**
 * related to main.ui
 * 
 * @Author : hb7675282
 * @Timestamp : 2017-08-11
 */
var nf = sm("do_Notification");
var root = ui("root")
var do_CountDownLabel_1 = ui("do_CountDownLabel_1")
var do_CountDownLabel_2 = ui("do_CountDownLabel_2")
do_CountDownLabel_1.countDown=5000
do_CountDownLabel_2.countDown=10000

ui("do_Button_1").on("touch",function(){
	do_CountDownLabel_1.countDown=5000
	do_CountDownLabel_1.redraw()
	do_CountDownLabel_2.countDown=10000
	do_CountDownLabel_2.redraw()
	nf.toast("重置倒计时")
})
do_CountDownLabel_1.on("finish",function(){
	nf.toast("计时框1计时结束")
})
do_CountDownLabel_2.on("finish",function(){
	nf.toast("计时框2计时结束")
})