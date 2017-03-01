/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-28
 */
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");

//animation	动画效果
//cacheType	是否支持网络图片的本地cache
//defaultImage	网络初始化图片
//enabled	是否可点击
//radius	圆角半径
//scale	图片显示类型
//source	图片路径


//setBitmap	绑定bitmap对象	同步方法


//touch	点击触发这个事件
//默认是预览效果的组件，修改enabled 即可监控图片的点击事件
ui("do_ImageView_6").on("touch",function(data){
	var  _id=this.id;
	var res="Id为"+this.id+"的被点击了";
	resultshow(res);
});

function resultshow(data) {
	ui("do_Label_6").set("text",data);
}