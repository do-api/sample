/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-07
 */ 
 var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

/**************/

//定义SwitchView对象
var target_1 = ui("do_SwitchView_1");
var target_2 = ui("do_SwitchView_2");

//修改checked属性为true，让SwitchView置为被选中状态
target_1.checked = true;

//通过属性列表修改colors属性，修改组件状态颜色，默认为第一个SwitchView的配色
//"0080FFFF,FF0000FF,FFFF00FF"

/**************/
//订阅changed事件
target_1.on("changed",function(data,e){
	//在changed事件中弹出alert提示
	nf.alert({text:data, title:"当前状态"}, function(data, e) {})
})
