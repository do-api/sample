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
	  nf.alert("第" + (data + 1) + "条数据被点击");
        target_1.selectedColor="FF0080FF";
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

ui("root").on("touch",function(data){
	 nf.alert("root");
});



