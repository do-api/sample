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
page.on("back",function(data){ 
	app.closePage();
});










/**********************************************************/

var target=mm("do_HashData");
//addData	增加数据	同步方法
ui("do_Button_1").on("touch",function(body){
	//mm("do_HashData").addData({data:{p1:[]}}),//data 是do 平台参数的关键字
	target.addData({
		p1:[{"a":1,"b":2},{"a":11,"b":22}]
	});
	
	deviceone.print("111",target.getCount());
})
//addOne	增加一条数据	同步方法
ui("do_Button_2").on("touch",function(body){
	target.addOne({
			p1:[{"a":1,"b":2},{"a":11,"b":22}]
	}); 
})
//getAll	获取全部数据	同步方法
ui("do_Button_3").on("touch",function(body){
	  target.getAll();
})
//getCount	获取元素个数	同步方法
ui("do_Button_4").on("touch",function(body){
	target.getCount();
})
//getData	获取数据	同步方法
ui("do_Button_5").on("touch",function(body){
	target.getData();
})
//getOne	获取某一行数据	同步方法
ui("do_Button_6").on("touch",function(body){
	target.getOne("");
})
//removeAll	清空数据	同步方法
ui("do_Button_7").on("touch",function(body){
	target.removeAll();
})
//removeData	根据keys删除多条数据	同步方法
ui("do_Button_8").on("touch",function(body){
	target.removeData("");
})
//removeOne	删除某一行数据	同步方法
ui("do_Button_9").on("touch",function(body){
	target.removeOne("");
})
/*********************************/
function resultshow(data){
	ui().set("text", data);
}