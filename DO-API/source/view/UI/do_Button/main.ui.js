/***********************************************************************************************************
 * @Author : child
 **********************************************************************************************************/
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
/***********************************************************************************************************/
//定义Button对象
var target_1 = ui("do_Button_1");
var target_2 = ui("do_Button_2");

//定义Label用于显示操作结果
var result = ui("do_Label_1")

//修改enabled属性为true，让Button可被点击（默认值即为true）
target_1.enabled = true;
result.text = " 获取设置后的值： " + target_1.get("enabled") ;

//修改text属性，修改显示文字
target_1.text = "abcABC你好123！@#";
result.text = " 获取设置后的值： " + target_1.get("text") ;

//修改fontColor属性，修改显示文字颜色
target_1.fontColor = "0080FFFF";
result.text = " 获取设置后的值： " + target_1.get("fontColor") ;

//修改fontSize属性，修改显示文字字号
target_1.fontSize = 35;
result.text = " 获取设置后的值： " + target_1.get("fontSize") ;

//修改fontStyle属性，修改显示文字为斜体//
target_1.fontStyle = "italic";
result.text = " 获取设置后的值： " + target_1.get("fontStyle") ;

//修改bgImage属性，修改显示背景图片
target_1.bgImage = "source://view/UI/do_Button/image/1.png";
result.text = " 获取设置后的值： " + target_1.get("bgImage") ;


/***********************************************************************************************************/
//touch事件
target_2.on("touch",function(data,e){
	var Type = typeof(data);
	result.text = "touch 事件 " + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "touch 事件 ");

	//在touch事件中修改Button的bgColor属性
	target_2.bgColor = "23FF807F";
})
//touchDown事件
target_2.on("touchDown",function(data,e){
	var Type = typeof(data);
	result.text = "touchDown 事件 " + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "touchDown 事件 ");
	
	//在touch事件中修改Button的bgImage属性
	target_2.bgImage = "source://view/UI/do_Button/image/1.png";
})
//touchUp事件
target_2.on("touchUp",function(data,e){
	var Type = typeof(data);
	result.text = "touchUp 事件 " + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "touchUp 事件 ");

	//在touch事件中清除Button的bgImage属性
	target_2.bgColor = "23FF807F";
})
/***********************************************************************************************************/
