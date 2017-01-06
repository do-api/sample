/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-28
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var result = ui("do_Label_2");

/***************************/
//定义Global对象
var target_1 = sm("do_Notification");

//在默认位置弹出toast窗口
ui("do_Button_1").on("touch",function(){
	target_1.toast({text:"默认位置"});
})

//在默认位置弹出toast窗口
ui("do_Button_2").on("touch",function(){
	target_1.toast({text:"默认位置",x:300,y:200});
})

//弹出alert窗口
ui("do_Button_3").on("touch",function(){
	target_1.alert({text:"弹出测试", title:"warning"}, function(data, e) {
		
	});
})

//弹出confirm窗口，可在回调函数中拿到方法的返回值
ui("do_Button_4").on("touch",function(){
	target_1.confirm({text:"确认按钮测试", title:"select", button1text:"conform", button2text:"cancel"}, function(data, e) {
		result.text = "点击了："+data+" 按钮";
	})
})
