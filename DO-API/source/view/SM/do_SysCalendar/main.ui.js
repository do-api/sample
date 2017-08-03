/**
 * related to main.ui
 * 
 * @Author : hb7675282
 * @Timestamp : 2017-08-01
 */
var do_SysCalendar = sm("do_SysCalendar")
var do_Global = sm("do_Global")
var id
var time = do_Global.getTime()
deviceone.print(time,"时间")
var startt = time+60000
var endt = time+120000
ui("do_Button_1").on("touch",function(){
	do_SysCalendar.add({title:"a1",description:"测试" ,startTime:startt,endTime:endt}, function(data, e) {
		id=data
		deviceone.print(data,"日程ID")
	})
})
ui("do_Button_2").on("touch",function(){
	deviceone.print(id,"id")
	do_SysCalendar.delete(id, function(data, e) {
		deviceone.print(data,"删除结果")
	})
})
ui("do_Button_3").on("touch",function(){
	do_SysCalendar.getAll(function(data, e) {
		deviceone.print(data,"全部日程")
	})
})
ui("do_Button_4").on("touch",function(){
	do_SysCalendar.update({id:id,title:"haha"},function(data){
		deviceone.print(data,"修改结果")
	})
})