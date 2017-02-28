/**
 * related to mian.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-14
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 


var target1 = sm("do_Dialog");//实例化一个位图对象 

/**
 * open	打开窗口	异步方法
 * close	关闭窗口	同步方法
 * getData	获取数据	同步方法
 * */


//path	String		是	支持source和data目录
//data	String		否	传递到Dialog的数据，通过getData方法获取该数据
//supportClickClose	Bool	true	否	设置成true时可以通过点击窗口外页面其他空白处关闭当前窗口；为false时则不支持点击关闭
ui("do_Button_1").on("touch",function(){
 
	target1.open({
		path:"source://view/SM/do_Dialog/d1.ui", 
		data:"非Native、非Html5、非hybrid，Deviceone是一座桥梁，只需掌握Javascript或者lua一次开发就能轻松完成IOS、Android和Windows的应用！", 
		supportClickClose:false
	}, function(data, e) {
		deviceone.print(JSON.stringify(data),typeof(data));
		showreslut("open结果为："+JSON.stringify(data)+",返回值类型为："+typeof(data)); 
	});
}); 
 
//如果supportClickClose设为false，关闭do_Dialog用target1的close
target1.close(data);

/**********************************************/
function  showreslut(data){ 
	ui("do_Label_2").set("text",data);
}
