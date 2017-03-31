/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-05
 */ 
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 

//关闭页面
page.on("touch",function(data){
	app.closePage();
	
});

//bindItems	绑定item的数据	同步方法
//refreshItems	刷新item数据	同步方法
var target=ui("do_ComboBox_6");
var listdata=mm("do_ListData");
 //text  id  是固定的里面的值可以根据业务来修改
var data0 = [{'text':'上海','id':'1'},{'text':'北京','id':'2'},{'text':'广州','id':'3'}]; 
listdata.addData(data0); 
//绑定item的数据
target.bindItems(listdata);
//刷新item数据  
target.refreshItems(); 

target.on("selectChanged",function(data){
	var res="返回值类型为："+typeof(data)+",返回值为："+JSON.stringify(data);
	resultshow(res);//页面展示说明
	deviceone.print(JSON.stringify(listdata.getOne(data)));//通过索引获取绑定的数据
});

/*****************************************/
function resultshow(data) { 
	ui("do_Label_7").set("text",data); 
}

ui("do_ComboBox_1").on("selectChanged",function(data){
	deviceone.print("返回值类型为："+typeof(data)+",返回值为："+JSON.stringify(data));
	 
});