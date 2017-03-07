/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-03
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");  

/*****
 * 特殊属性
 * 
 * bgImage	背景图片
 * bgImageFillType	背景图片填充方式
 * enabled	是否可点击
 * isStretch	是否自动拉伸
 * layoutAlign	对齐方式
 * 
 * 
 */
var target=ui("do_ALayout_2");

//设置layout的背景图片，支持data://和source://两种方式；文件格式说明参考Storage类 
ui("do_Button_1").on("touch",function(){
	target.set("bgImage","source://view/do_ALayout/image/wx.png");
	resultlbldata("填加背景图片，看上图"); 
	
});
//点击效果
target.on("touch",function(data){ 
	nf.toast("我是可以点击的");
});
//enabled
ui("do_Button_1").on("touch",function(){
	target.set("enabled",false);
	resultlbldata("不可点击"); 
});
 

 
 
 /****
  * 特殊方法
  * add	插入一个UI	同步方法
  * getChildren	获取子view的id	同步方法
  * 
  */
  
  /****
   * 
   * 特殊事件
   * 
   * longTouch	长按事件
   * touch	    按下并在alayout范围抬起，触发该事件
   * touchDown	alayout范围内按下即可触发，必须先订阅toch事件才会有效果
   * touchUp	一旦按下，手指离开即触发，不论是否在alayout范围内，必须先订阅toch事件才会有效果
   * 
   */


ui("do_Button_3").on("touch", function(data) {
	deviceone.print("111");
	ui("do_ALayout_7").show("slide_l2r");
})
/********************************************/
//重置
ui("do_Button_2").on("touch",function(){
	target.set("enabled",true);
	resultlbldata("重置为可点击"); 
});
//封装修改展示文本
function resultlbldata(data){
	ui("do_Label_2").set("text",data);
}
 