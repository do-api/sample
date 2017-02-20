/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2017-2-14
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var result = ui("do_Label_2");

/***************************/
//定义3DTouch对象
var target_1 = sm("do_3DTouch");

//添加桌面快捷菜单1
//icon短码见文档http://doc.deviceone.net/web/doc/detail_course/third_party/3DTouch.htm
ui("do_Button_1").on("touch",function(){
	target_1.addShortcutItem({id:"id1", title:"标题1", icon:"Home", subTitle:"子标题1", userInfo:{"aa":"11","bb":"22"}});
	nf.toast("菜单1已添加");
})

//添加桌面快捷菜单2
ui("do_Button_2").on("touch",function(){
	target_1.addShortcutItem({id:"id2", title:"扫一扫", icon:"Love", subTitle:"打开手机的扫一扫功能", userInfo:{"ccc":"333"}});
	nf.toast("菜单2已添加");
})

//删除桌面快捷菜单，按id删除
ui("do_Button_3").on("touch",function(){
	target_1.removeShortcutItem({id:"id1"});
	nf.toast("菜单1已删除");
})

//订阅3DTouch的touch事件，将返回值显示在页面的Label中
target_1.on("touch",function(data){
	result.text = data;
})
