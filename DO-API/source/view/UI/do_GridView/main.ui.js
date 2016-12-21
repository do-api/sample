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

//组件描述
var do_Label_2  = ui("do_Label_2");
do_Label_2.text = "GridView是一个二维网格滚动视图，可将数据源中的一条数据显示为表格中的一个cell，若设置为多模版，需要模板的大小相同";
