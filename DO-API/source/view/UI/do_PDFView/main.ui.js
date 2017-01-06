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
var storage = sm("do_Storage");

//定义PDFView对象
var target_1 = ui("do_PDFView_1");
var label = ui("do_Label_1");

/**************/

//设置打开的pdf文件路径为source目录下文件，同时支持data目录
target_1.url = "source://view/UI/do_PDFView/1.pdf";

//在页面加载完后立即获取pdf页数并显示在页面下方
page.on("loaded",function(){
	var count = target_1.getPageCount();
	var total = count.total;
	var current = count.current
	label.text = "共 - "+total+" - 页，当前第 - "+current+" - 页";
})

//返回上一页
ui("do_ImageView_1").on("touch",function(){
	target_1.prev();
})

//进入上一页
ui("do_ImageView_2").on("touch",function(){
	target_1.next();
})

//跳转到指定页
ui("do_ImageView_3").on("touch",function(){
	var PAGE = ui("do_TextField_1").text;
	target_1.jump({page:PAGE});
})

/**************/
//订阅pageChanged事件，在返回值中获取PDF文件的总页数和当前页数
target_1.on("pageChanged",function(data,e){
	var total = data.total;
	var current = data.current
	label.text = "共 - "+total+" - 页，当前第 - "+current+" - 页";
})