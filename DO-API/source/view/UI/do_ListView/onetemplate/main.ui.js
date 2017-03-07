/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-28
 */
var app=sm("do_App");
var page=sm("do_Page"); 


//关闭当前页
page.on("back",function(data){
	app.closePage();
});


var target=ui("do_ListView_1");
var ld=mm("do_ListData");


/**
 * 属性：
 * */
//bounces	反弹效果
//canScrollToTop	是否滚动到屏幕顶部
//footerView	底部视图
//headerView	表头视图
//isFooterVisible	是否显示footerview
//isHeaderVisible	是否显示headerview
//isShowbar	是否支持显示滚动条效果
//selectedColor	Cell选中的背景颜色
//templates	Cell对应的模板UI文件组

/**
 * 方法
 */

//bindItems	绑定item的数据	同步方法

var _d=[
    	{"name":"爸爸妈妈","author":"林俊杰"},
    	{"name":"和你一样","author":"李宇春"},
    	{"name":"追梦赤子心","author":"群星"},
    	{"name":"模特","author":"李荣浩"},
    	{"name":"Dream is possible","author":"delacey"},
    	{"name":"天亮了","author":"韩红"},
    	{"name":"微光","author":"华晨宇"},
    	{"name":"you are my sunshine","author":"张靓颖"},
    	{"name":"一千年以后","author":"林俊杰"},
    	{"name":"改变自己","author":"王力宏"},
    	{"name":"凉凉","author":"三生三世主题曲"}
    ]
ld.addData(_d);
target.bindItems(ld);//必填
//refreshItems	刷新item数据	同步方法
target.refreshItems();//必填
//rebound	复位	同步方法
//target.rebound();
//scrollToPosition	平滑地滚动到特定位置	同步方法

//showHeader	显示HeaderView	同步方法


/**
 * 事件
 * */

//longTouch	长按cell触发

target.on("longTouch", function(data, e) {
	var res="longTouch事件长按cell触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});

//longTouch1	长按cell触发

target.on("longTouch1", function(data, e) {
	var res="longTouch1事件长按cell触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});
//pull	下拉headerview事件
target.on("pull", function(data, e) {
	var res="pull事件拉headerview触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});

//push	上拉footerview事件 
target.on("push", function(data, e) {
	var res="push事件上拉footerview触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});
//scroll	滑动事件
target.on("scroll", function(data, e) {
	var res="scroll事件 滑动触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});

//sizeChanged	组件尺寸改变世界
target.on("sizeChanged", function(data, e) {
	var res="sizeChanged事件 滑动触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});

//touch	点击cell触发
target.on("touch", function(data, e) {
	var res="touch事件 点击cell触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});

//touch1	点击cell触发
target.on("touch1", function(data, e) {
	var res="touch1事件 点击cell触发，返回值类型为："+typeof(data)+"返回值为："+JSON.stringify(data);
	resultshow(res);
});

/**
 * 页面提示效果展示
 * */

function resultshow(data){
	ui("do_Label_1").set("text",data);
	
}
