/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-21
 */
var nf = sm("do_Notification");
var initdata = sm("do_InitData");
var target_1 = ui("do_GridView_1");
//GridView需要一个listdata对象来管理和绑定数据
var gridData = mm("do_ListData");
// bindItems方法建立GridView对象和ListData对象的绑定关系
target_1.bindItems(gridData);
initdata.readFile("initdata://do_gridview/gridview.json", function(data, e){
    gridData.addData(data);
    target_1.refreshItems();
});
//订阅GridView的touch点击事件
target_1.on("touch", function(data) {
        nf.alert("第" + (data + 1) + "条数据被点中");
})
// 订阅GridView的longTouch长按事件;
target_1.on("longTouch", function(data) {
        nf.alert("第" + (data + 1) + "条数据被长按");
});
//订阅GridView的pull下拉headerview事件事件;
target_1.on("pull", function(data) {
   if(data.state =="2"){
	   nf.alert("开始加载新数据....");
	   initdata.readFile("initdata://do_gridview/gridview1.json", function(data, e){
		    gridData.addData(data);
		    target_1.refreshItems();
		});
	   target_1.rebound(); //调用此方法 让hearder复位
   }
});

//组件描述
var do_Label_2  = ui("do_Label_2");
do_Label_2.text = "GridView是一个二维网格滚动视图，可将数据源中的一条数据显示为表格中的一个cell，若设置为多模版，需要模板的大小相同";
var do_Label_3 = ui("do_Label_3");
do_Label_3.text ="支持平台及最低版本 :IOS 7.0  Android 4.0  Windows Phone 10  Windows 10";
var do_Label_5 = ui("do_Label_5");
do_Label_5.text ="1.长按cell触发longTouch、longTouch1事件。 longTouch返回当" +
		"前cell的position值， longTouch1返回当前cell的position值和在当前cell的绝对位" +
		"置x,y，如{'position':'2','x':'0','y':'30'}" ;

var do_Label_6 = ui("do_Label_6");
do_Label_6.text ="2.点击cell触发touch、touch1事件。touch返回当" +
		"前cell的position值，touch1当前cell的position值和在当前cell的绝对位置x,y，如{'position':'2','x':'0','y':'30'}";
var do_Label_7 = ui("do_Label_7");
do_Label_7.text ="3.下拉headerview事件，" +
		"返回{state,offset}，其中state表示headerview的状态，" +
		"offset为headerview下拉的位移量；其中state=0：" +
		"表示开始下拉headerview，在headerview下拉到headerview复位整个过程中，" +
		"pull事件会触发很多次；state=1：表示下拉headerview超过headerview的高度，" +
		"触发一次这个事件，前端开发者接受到这个事件会更新headerview的ui；state=2：" +
		"下拉超过一定值，触发state=1事件后，松手会触发一次这个事件，前端开发者接受到" +
		"这个事件会更新headerview的ui，然后开始加载数据，数据加载完后需要调用rebound方法让header复位";



