/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-29
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var img = ui("do_ImageView_1");

/***************************/
//定义do_QRCode实例
var target_1 = sm("do_QRCode");

//定义变量用于保存生成二维码的地址
var Path;

//定义要生产二维码的内容
var Text = "DeviceOne是一个专业的移动应用开发平台，它可以帮助我们重用原生代码、提高开发效率、降低开发成本、让普通的程序员也可以轻松生成具备原生体验效果的高品质App。拥有业内最先进技术框架、最优秀最具创新力和战斗力的技术团队、打造最开放最强大的移动应用开发平台，DeviceOne值得您期待!";
ui("do_TextBox_1").text = Text;

//在Button的touch事件中调用do_QRCode的生成二维码方法并控制二维码图片边长为550
ui("do_Button_1").on("touch",function(data,e){
		target_1.create({text:Text, length:550}, function(data, e) {//将返回的二维码地址赋值给path
		Path = data;
		img.source = data;
	})
})
	
		


//再ImageView的touch事件中识别生成的二维码，需先将ImageView的enabled属性改为true
img.on("touch",function(data,e){
	target_1.recognition({path:Path}, function(data, e) {
		nf.alert(data,"识别的内容");
	})
})


