/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-16
 */
var app = sm("do_App");
var page = sm("do_Page"); 

var  target=mm("do_Animator","_apiAnimator","page");
/***
 * 组件商店：http://store.deviceone.net  
 * 组件名称：动画
 * 组件介绍：所有UI组件缩放，移动，透明度变化，旋转都支持动画效果。这个类就是用来定义动画所有属性值的集合，作为UI的animate方法的参数
 * 支持平台及最低版本 :
 * IOS 7    Android 4.0    Windows Phone 10    Windows 10   
 **/

/**
 * 组件方法
 * append	创建属性动画	同步方法
 * 
 * */

/***
 * append 参数
 * 
 * duration	Number		是	单位为毫秒
 * props	Node		否	这是一个JSON node节点，包含多个参数，参数集合如下：{'x':10,'y':50,'height':500...}为空时表示状态不变
 * curve	String	Linear	否	支持四种情况：1.'EaseInOut'动画启动时候慢，中间快，结束的时候慢、2.'EaseIn'动画启动的时候慢、3.'EaseOut'动画结束的时候慢、4.'Linear'动画速度不变
 * 
 */
target.append({
	duration:1000, 
	props:{'x':25,'y':25}, 
	curve:4
	});
ui("do_Button_1").on("touch",function(data){
	resultlbl("开始动画");
	ui("do_ImageView_1").animate(target,function(){
		resultlbl("结束动画");
	});
})

/**************************************************************/
var reset=mm("do_Animator","_reset","page");
reset.append({duration:1000, props:{'x':200,'y':250},curve:4});
ui("do_Button_2").on("touch",function(data){
	
	ui("do_ImageView_1").animate(reset,function(){
		resultlbl("重置");
	});
})

/**************************************/
function resultlbl(data) {
	ui("do_Label_2").set("text",data);
}