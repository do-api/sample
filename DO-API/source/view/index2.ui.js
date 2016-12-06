/***********************************************************************************************************
 * @Author : child
 **********************************************************************************************************/
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var linear = ui("do_LinearLayout_1");

/**********************************************************************************************************/
var idata = page.getData();
var type = idata.TYPE;
var name = idata.NAME;

page.on("loaded",function(){
	linear.add({id:"id", path:"source://view/"+type+"/"+name+"/main.ui", target:""});
})


var img1 = ui("img1");
img1.on("touch",function(data, e){
	app.closePage({data:"", animationType:""}, function(data, e){
		ui("id").remove();
	});
});
