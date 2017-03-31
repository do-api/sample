/**
 * related to test0.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-31
 */

var app=sm("do_App");
var page=sm("do_Page");

//关闭页面
page.on("touch",function(data){
	app.closePage();
	
});
var  target=ui("do_ScrollView_1");



//下拉
target.on("pull",function(data){
	var res="下拉pull---返回数据为："+JSON.stringify(data)+"，返回类型为："+typeof(data);
	resultshow(res);
	
	if(data.state==2){
		target.rebound();
	}
	
	
});
//上推
target.on("push",function(data){
	var res="上推push---返回数据为："+JSON.stringify(data)+"，返回类型为："+typeof(data);
	resultshow(res);
	if(data.state==2){
		target.rebound();
	}
	
});

//滑动触发
target.on("scroll",function(data){
	var res="滑动scroll---返回数据为："+JSON.stringify(data)+"，返回类型为："+typeof(data);
	resultshow(res);
	
});

//结果处理
function resultshow(data){
	ui("do_Label_2").set("text",data);
	
}
