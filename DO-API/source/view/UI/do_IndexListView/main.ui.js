/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-02
 */ 
var app = sm("do_App");
var page = sm("do_Page");
var target=ui("do_IndexListView_1");



/**
 * 属性
 * 
 * */
//indexBarColors	索引颜色
//selectedColor	Cell选中的背景颜色
//templates	Cell对应的模板UI文件组

/**
 * 方法
 * 
 * */

//bindItems	绑定item的数据	同步方法
//refreshItems	刷新item数据	同步方法
var hd = mm("do_HashData"); 
hd.addData({
	'A':[{'template':0,'text':'cxx'},{'template':1,'text':'2013'}], 
	'B':[{'template':0,'text':'lh'},{'template':1,'text':'2015'}] 
});

target.bindItems(hd);
target.refreshItems();
/**
 * 事件
 * */

//longTouch	长按cell触发
//touch	点击cell触发

target.on("touch",function(data){
	deviceone.print(JSON.stringify(data),typeof(data));
});
target.on("longTouch",function(data){
	deviceone.print(JSON.stringify(data),typeof(data));
});
