/***********************************************************************************************************
 * @Author : child
 **********************************************************************************************************/
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var global = sm("do_Global");

var img1 = ui("img1");
img1.on("touch",function(data, e){
	app.closePage({data:"", animationType:""}, function(data, e){});
});

/**********************************************************************************************************/
var listview , listdata;
listview = ui("list1");
listdata = mm("do_ListData");
listview.bindItems(listdata);

var data0 = [
	{"$txt":"可视化组件 \\ User Interface","$tag":"UI" },
	{"$txt":"单实例组件 \\ Singleton Module","$tag":"SM" },
	{"$txt":"多实例组件 \\ Multiple Module","$tag":"MM" }
];

listdata.addData(data0);
listview.refreshItems();

listview.on("touch",function(index){
	var a = listdata.getOne(index);
	app.openPage("source://view/index1.ui",a, {
		
	})
});
