/**
 * related to mian.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-14
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 


var target1 = mm("do_Bitmap");//实例化一个位图对象
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
	//loadFile	加载位图
	target1.loadFile({source:"source://view/MM/do_Bitmap/image/Bitmap1.png",function(){
		nf.toast("加载成功！");
		
	}});	
});
var btn2=ui("do_Button_2");
btn2.on("touch",function(){
	
	//save	保存位图
	target1.save({
		
		
	});
});
var btn3=ui("do_Button_3");

btn3.on("touch",function(data){
	//toFrostedGlass	转成毛玻璃位图
	target1.toFrostedGlass({
		
		
	});
	
});

var btn4=ui("do_Button_4");

btn4.on("touch",function(){
	
	//toGrayScale	转成灰色位图
	target1.toGrayScale({
		
		
	});
});

var btn5=ui("do_Button_5");
btn5.on("touch",function(){
	
	//toRoundCorner	添加圆角
	target1.toRoundCorner({
		
	});
});


var btn6=ui("do_Button_6");
btn6.on("touch",function(){
	//getExif	获取图片拍摄信息
	target1.getExif({source:"source://view/MM/do_Bitmap/image/Bitmap1.png",function(data){
		
		deviceone.print(JSON.stringify(data),"getExif");
		
	}});
	
});
