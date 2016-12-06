/***********************************************************************************************************
 * @Author : child
 **********************************************************************************************************/
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

var list1 = ui("list1");
var listdata = mm("do_ListData");
list1.bindItems(listdata);

/**********************************************************************************************************/
var img1 = ui("img1");
img1.on("touch",function(data, e){
	app.closePage({data:"", animationType:""}, function(data, e){});
});

/**********************************************************************************************************/
var pagedata = page.getData({});

/**********************************************************************************************************/
var initdata = sm("do_InitData");
initdata.readFile("initdata://idata.json", function(data, e){
	deviceone.print(JSON.stringify(data[pagedata.$tag]),"tag");
	listdata.addData(data[pagedata.$tag]);
	list1.refreshItems({});
});

list1.on("touch",function(index){
	var ld = listdata.getOne(index);
	var type = ld.TYPE;
	var name = ld.NAME; 
	var idata = {"TYPE":type,"NAME":name};
	app.openPage({source:"source://view/index2.ui", data:idata}, function(data, e) {})
});

