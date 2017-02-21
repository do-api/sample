/**
 * related to mian.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-14
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 


var target1 = mm("do_Algorithm");//实例化一个位图对象
var show_lbl=ui("do_Label_2");//定义一个加密后展示的区域 
var str="deviceone";//被加密的字符串

/**
 * MM 组件方法
 *    特殊方法示例如下
 *    base64 
 *    des3
 *    hex2Binary
 *    hex2Str
 *    md5
 *    sha1
 *    xml2Json
 *    
 * */
var btn1=ui("do_Button_1");
btn1.on("touch",function(){
 
	target1.base64("");
});
var btn2=ui("do_Button_2");
btn2.on("touch",function(){
	
	 
});
var btn3=ui("do_Button_3");

btn3.on("touch",function(data){
	 
	
});

var btn4=ui("do_Button_4");

btn4.on("touch",function(){
	
	 
});

var btn5=ui("do_Button_5");
btn5.on("touch",function(){
	 
});


var btn6=ui("do_Button_6");
btn6.on("touch",function(){
	 
});
