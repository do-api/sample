/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-05
 */ 

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

//show	弹出选择日期，时间，或日期时间窗口
var do_Label_1 = ui("do_Label_1");
/****************************************************************************/
 
var target_1 = sm("do_DateTimePicker");

//type	Number		是	0表示日期及时间，1表示只有日期，2表示只有时间，3表示日期、星期及时间
//data	String		否	long型时间，缺失值是当前日期时间long型
//maxDate	String	4102329600000	否	long型时间，缺省值是2099年对应的long型
//minDate	String	0	否	long型时间，最小日期不能大于最大日期，缺省值是1970年对应的long型
//title	String	日期时间选择	否	缺省值是‘时间选择’或者‘日期选择’或者‘日期时间选择’，根据type来区分
//buttons	Node	["取消","确定"]	否	为空或不设值不显示按钮，显示缺省值，如果设值为[]，则不显示按钮

ui("do_Button_1").on("touch",function(data){ 
	//type 必填
	target_1.show({
		type:0, 
		data:"", 
		maxDate:"", 
		minDate:"", 
		title:"", 
		buttons:["取消","确定"]
	}, function(data, e) {
		deviceone.print(JSON.stringify(data),typeof(data));
	})
	
})  

ui("do_Button_2").on("touch",function(data){ 
	//type 必填
	target_1.show({
		type:1, 
		data:"", 
		maxDate:"", 
		minDate:"", 
		title:"", 
		buttons:["取消","确定"]
	}, function(data, e) {
		deviceone.print(JSON.stringify(data),typeof(data));
	})
	
})  

ui("do_Button_3").on("touch",function(data){ 
	//type 必填
	target_1.show({
		type:2, 
		data:"", 
		maxDate:"", 
		minDate:"", 
		title:"", 
		buttons:["取消","确定"]
	}, function(data, e) {
		deviceone.print(JSON.stringify(data),typeof(data));
	})
	
})  

ui("do_Button_4").on("touch",function(data){ 
	//type 必填
	target_1.show({
		type:3, 
		data:"", 
		maxDate:"", 
		minDate:"", 
		title:"", 
		buttons:["取消","确定"]
	}, function(data, e) {
//		{"flag":1,"time":"1484034000000"}
		deviceone.print(JSON.stringify(data),typeof(data));
		
	})
	
}) 

function resultshow(data){
	
	ui("do_Label_2").set("text","当前时间为："+data);
	
}
  