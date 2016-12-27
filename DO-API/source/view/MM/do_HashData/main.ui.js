/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-26
 */
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page"); 
var nf = sm("do_Notification");

var  btn1=ui("do_Button_1");
btn2.on("touch",function (data,e){
	var target=mm("do_HashData"); 
	target.mm("do_HashData").addData({
		p1:[{"a":1,"b":2},{"a":11,"b":22}]
	}); 
	deviceone.print("111",target.getCount());
	//mm("do_HashData").addData({data:{p1:[]}}),//data 是do 平台参数的关键字
	
	//addData addOne getAll getCount getData getOne removeAll removeData removeOne
	//
});
var  btn2=ui("do_Button_2");
btn.on("touch",function (data,e){
	var hd=mm("do_HashData"); 
	hd.mm("do_HashData").addData({
		p1:[{"a":1,"b":2},{"a":11,"b":22}]
	}); 
	deviceone.print("111",hd.getCount());
	//mm("do_HashData").addData({data:{p1:[]}}),//data 是do 平台参数的关键字
	
	//addData addOne getAll getCount getData getOne removeAll removeData removeOne
	//
	//
});