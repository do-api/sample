/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-28
 */
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");

//cropArea	裁剪的区域
//source	图片路径


//crop	裁剪图片	异步方法
ui("do_ImageView_6").on("touch",function(data){
	var  _id=this.id;
	var res="Id为"+this.id+"的被点击了";
	resultshow(res);
});

function resultshow(data) {
	ui("do_Label_6").set("text",data);
}