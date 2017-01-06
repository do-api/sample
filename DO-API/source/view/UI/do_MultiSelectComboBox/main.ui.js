/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-07
 */ 
 var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

/**************/

//定义MultiSelectComboBox对象
var target_1 = ui("do_MultiSelectComboBox_1");

//修改text属性，用于多选组件标题显示
target_1.text = "请选择";

//修改fontColor属性，用于修改字体颜色
target_1.fontColor = "184682FF";

//修改fontSize属性，用于修改字体大小
target_1.fontSize = "24";

//修改fontStyle属性，用于修改字体风格
target_1.fontStyle = "italic";

//修改textFlag属性，用于修改字体标示
target_1.textFlag = "underline";

//修改indexs属性，设置第二项默认被选中
target_1.indexs = 1;

//修改items属性，给多选组件绑定显示数据
target_1.items = "北京,上海,广州,深圳,成都,长沙";

//修改textAlign属性，用于修改字体对齐方式
target_1.textAlign = "center";

//修改items属性，给多选组件绑定显示数据
target_1.items = "北京,上海,广州,深圳,成都,长沙";

//重新绑定并刷新数据
ui("do_Button_1").on("touch",function(){
	var listdata = mm("do_ListData");
	var data = [{"text":"红","id":1},
	             {"text":"橙","id":2},
	             {"text":"黄","id":3},
	             {"text":"绿","id":4},
	             {"text":"蓝","id":5},
	             {"text":"靛","id":6}]
	listdata.addData(data);
	target_1.bindItems(listdata);
})

/**************/
//订阅changed事件
target_1.on("selectChanged",function(data,e){
	nf.alert({text:data, title:"选中项索引"}, function(data, e) {})
})
