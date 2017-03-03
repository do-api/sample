/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-28
 */

 var app = sm("do_App");
 var page = sm("do_Page");
 
 
 var listview = ui("do_ListView_1");
 
 var listdata = mm("do_ListData");
 listview.bindItems(listdata);

 listdata.addData([
	{"template":0,"c1btntxt":"图片1"},
	{"template":1,"c2lbl1txt":"官网首页","c2lbl2txt":"http://www.deviceone.net/" }, 
	{"template":1,"c2lbl1txt":"学习模块","c2lbl2txt":"开发  GET Start" }, 
	{"template":1,"c2lbl1txt":"组件商店","c2lbl2txt":"组件api标准文档"}, 
	{"template":1,"c2lbl1txt":"开发模块","c2lbl2txt":"app开发，组件开发"},
	{"template":1,"c2lbl1txt":"交流模块","c2lbl2txt":"bbs论坛，学习模块进入"}
 ]);
 
