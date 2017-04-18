/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-22
 */

var app = sm("do_App");
var page = sm("do_Page"); 
var nf = sm("do_Notification");
 

var target = ui("do_Picker_1");
var listdata1 = mm("do_ListData"); 

var data1 = [ '北京','上海','广州', '深圳','新疆']; 
listdata1.addData(data1);
target.bindItems(listdata1);
target.refreshItems();


target.on("selectChanged",function(data){
	var res="返回的数据的格式为:"+typeof(data)+",返回的数据为:"+JSON.stringify(data);
	 
	resultshow(res);
});

function resultshow(data){
	ui("do_Label_2").set("text",data);
}