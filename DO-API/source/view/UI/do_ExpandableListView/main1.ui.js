var app=sm("do_App"); 
var el=ui("do_ExpandableListView_1"); 

var page=sm("do_Page");
	
page.on("back",function(data){
	app.closePage(); 
});

var ListData1 = mm("do_ListData");
var ListData2 = mm("do_ListData");

var data1 = [
             /**
              * 给数组模板添加数据source://view/do_ExpandableListView/test2.ui
              */
             {"$1":"华东地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"},
             {"$1":"华中地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"},
             {"$1":"华南地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"},
             {"$1":"华北地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"},
             {"$1":"西北地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"},
             {"$1":"西南地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"},
             {"$1":"东北地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"},
             {"$1":"台港澳地区","$2":"source://view/UI/do_ExpandableListView/image/pull.png"}
            ];

var data2 = [
             /**
              * 给数组模板添加数据
              */
             [{"$3":"山东"},{"$3":"江苏"},{"$3":"安徽"},{"$3":"浙江"},{"$3":"福建"},{"$3":"上海"},{"$3":"江西"}],
             [{"$3":"广东"},{"$3":"广西"},{"$3":"海南"}],
             [{"$3":"湖北"},{"$3":"湖南"},{"$3":"湖北"}],
             [{"$3":"北京"},{"$3":"天津"},{"$3":"河北"},{"$3":"山西"},{"$3":"内蒙古"}],
             [{"$3":"宁夏"},{"$3":"新疆"},{"$3":"青岛"},{"$3":"陕西"},{"$3":"甘肃"}],
             [{"$3":"四川"},{"$3":"云南"},{"$3":"贵州"},{"$3":"西藏"},{"$3":"重庆"}],
             [{"$3":"辽宁"},{"$3":"吉林"},{"$3":"黑龙江"}],
             [{"$3":"台湾"},{"$3":"香港"},{"$3":"澳门"}]  
             ];

ListData1.addData(data1);
ListData2.addData(data2);
el.bindItems(ListData1,ListData2);
/**
 * 绑定item的数据
 */


var do_Button_1=ui("do_Button_1");
var do_Button_2=ui("do_Button_2");

do_Button_1.on("touch", function(data, e) {
	/**
	 * 展开组，同时展开一组或多组，indexs表示视图的第几组，从0开始计数
	 */
	el.expandGroup([1]);
})

do_Button_2.on("touch", function(data, e) {
	/**
	 * 收缩组，同时收缩一组或多组，indexs表示视图的第几组，从0开始计数
	 */
	el.collapseGroup([1]);
})



var do_Label_3=ui("do_Label_3");
var do_Label_4=ui("do_Label_4");
el.on("groupTouch", function(data, e) {
	/**
	 * group中的cell触发当前cell的索引值
	 */
	do_Label_3.text="点击父数组显示当前数组的索引值为 : "+data
})

el.on("childTouch", function(data, e) {
	/**
	 * child中的cell触发触发当前group的索引值和cell的索引值,如：{'groupIndex':1,'childIndex':5}
	 */
	do_Label_3.text="点击子数组显示当前父数组和子数组的索引值为 : "+JSON.stringify(data)
})

el.on("groupExpand", function(data, e) {
	/**
	 * group展开触发当前group中cell的索引值
	 */
	do_Label_4.text="展开显示当前数组的索引值为 : "+data
})

el.on("groupCollapse", function(data, e) {
	/**
	 * group收缩触发当前group中cell的索引值
	 */
	do_Label_4.text="收缩显示当点数组的索引值为 : "+data
})
