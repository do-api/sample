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
	{"template":1,"c2lbl1txt":"姓名","c2lbl2txt":"cxx" },
	{"template":1,"c2lbl1txt":"姓名2","c2lbl2txt":"cxx2"}
 ]);
// templates	source://view/UI/do_ListView/moretemplate/cell/c1.ui,source://view/UI/do_ListView/moretemplate/cell/c2.ui
//	  
 
