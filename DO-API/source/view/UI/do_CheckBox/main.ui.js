/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-21
 */

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 
//  
var target=ui("do_CheckBox_1");
//var listdata=mm("do_ListData");
// //text  id  是固定的里面的值可以根据业务来修改
//var data0 = [{'text':'上海','id':'1'},{'text':'北京','id':'2'},{'text':'广州','id':'3'}]; 
//listdata.addData(data0); 
////绑定item的数据
//target.bindItems(listdata);
////刷新item数据  
//target.refreshItems(); 
//
//target.on("selectChanged",function(data){
//	var res="返回值类型为："+typeof(data)+",返回值为："+JSON.stringify(data);
//	resultshow(res);//页面展示说明
//	deviceone.print(JSON.stringify(listdata.getOne(data)));//通过索引获取绑定的数据
//});


ui("do_CheckBox_1").on("checkChanged",function(data){
	var str="返回值类型为："+typeof(data)+",返回值："+JSON.stringify(data);
	resultshow(str);
});
ui("do_CheckBox_2").on("checkChanged",function(data){
	var str="返回值类型为："+typeof(data)+",返回值："+JSON.stringify(data);
	resultshow(str);
});
ui("do_CheckBox_3").on("checkChanged",function(data){
	var str="返回值类型为："+typeof(data)+",返回值："+JSON.stringify(data);
	resultshow(str);
});
ui("do_CheckBox_4").on("checkChanged",function(data){
	var str="返回值类型为："+typeof(data)+",返回值："+JSON.stringify(data);
	resultshow(str);
});
/*****************************************/
function resultshow(data) { 
	ui("do_Label_3").set("text",data); 
}
 

//checked	是否选中
//enabled	是否可点击
//fontColor	字体颜色
//fontSize	字体大小
//fontStyle	字体风格
//text	文本显示内容
//textFlag	字体标示