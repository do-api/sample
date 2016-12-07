/***********************************************************************************************************
 * @Author : child
 **********************************************************************************************************/
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/***********************************************************************************************************/
//定义SwitchView对象
var target_1 = ui("do_SwitchView_1");

//定义Label用于显示操作结果
var result = ui("do_Label_1")

//修改checked属性为true，让SwitchView置为被选中状态
target_1.checked = true;
result.text = " 获取设置后的值： " + target_1.get("checked") ;

//通过属性列表修改colors属性，修改组件状态颜色，默认为第一个SwitchView的配色
//"0080FFFF,FF0000FF,FFFF00FF"

/***********************************************************************************************************/
//订阅changed事件
target_1.on("changed",function(data,e){
	var Type = typeof(data);
	result.text = "changed 事件 " + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "changed 事件 ");

	//在changed事件中弹出alert提示
	nf.alert({text:data, title:"当前状态"}, function(data, e) {})
})
/***********************************************************************************************************/
