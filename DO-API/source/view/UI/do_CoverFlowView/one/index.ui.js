/**
 * related to index.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-24
 */
var app = sm("do_App");
var page = sm("do_Page"); 
 

page.on("back", function() {
    app.closePage()
}); 

/**
 * 这个UI组件包含多个子视图，实现多个子视图之间左右平缓滑动效果；该组件支持设置多个模板视图，要求多个模板大小相同
 * 
 * 这里只是展示非基类的属性方法与事件
 */
var target =ui("do_CoverFlowView_1");

target.index=0;//index	当前滑动View索引  默认为0

target.looping=true ;//looping	左右无限滑动,默认false
 //spacing	间距 只允许设计器内修改

//templates	显示视图对应UI模板文件  只允许设计区内修改
/***************************/
var listdata=mm("do_ListData");
listdata.addData([{"template":0,"c1":"首页"},{"template":1,"c2":"中间"},{"template":2,"c3":"最后一页"}]);
target.bindItems(listdata)//bindItems	绑定视图模板数据	同步方法
target.refreshItems();//refreshItems	刷新数据	同步方法

target.on("indexChanged", function(data, e) {
	deviceone.print(JSON.stringify(data),"indexChanged");
})//indexChanged	滑动显示当前视图后触发该事件

target.on("touch", function(data, e) {
	deviceone.print(JSON.stringify(data),"touch");
});//touch	点击cell触发