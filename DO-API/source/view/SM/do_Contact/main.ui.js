/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-29
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var label = ui("do_Label_1");

//点击页面空白处隐藏键盘
ui("do_ALayout_1").on("touch",function(){
	page.hideKeyboard();
})

var NAME,PHONE,EMAIL,ID;

/***************************/
//定义do_QRCode实例
var target_1 = sm("do_Contact");

ui("do_Button_1").on("touch",function(data,e){ 
	//模糊查询姓名中含“李”字的联系人
	target_1.getData({value:"李", types:["name"]}, function(data, e) {
		label.text = JSON.stringify(data);
		deviceone.print(JSON.stringify(data),"getData");
	});
});

ui("do_Button_3").on("touch",function(data,e){ 	
	NAME = ui("do_TextField_1").text;
	PHONE = ui("do_TextField_2").text;
	EMAIL = ui("do_TextField_3").text;
	
	//添加输入的联系人
	target_1.addData({paras:[{'name':NAME,'phone':PHONE,'email':EMAIL}]}, function(data, e) {
		nf.alert(data,"联系人的唯一标示");
		deviceone.print(data,"联系人的唯一标示");
		deviceone.print(typeof(data),"type");
		ID = data;
		deviceone.print(ID,"ID");
	});
});

ui("do_Button_4").on("touch",function(data,e){ 	
	NAME = ui("do_TextField_1").text;
	PHONE = ui("do_TextField_2").text;
	EMAIL = ui("do_TextField_3").text;
	deviceone.print(NAME+" ;"+PHONE+";"+EMAIL,"ddd");
	deviceone.print(ID,"ID");
	//修改刚添加的联系人
	target_1.updateData({id:ID[0], paras:[{'name':NAME,'phone':PHONE,'email':EMAIL}]}, function(data, e) {
		nf.alert(data,"修改是否成功");
	});
});

ui("do_Button_5").on("touch",function(data,e){ 
	//删除刚添加的联系人
	deviceone.print(JSON.stringify(ID));
	//{ids:[ID[0]]}，可以
	//{ids:ID} 可以
	//ids:ID[0]} 这个是错误的写法，不要这么写，容易把整个通讯录删掉
	target_1.deleteData({ids:[ID[0]]}, function(data, e) {
		nf.alert(data,"删除是否成功");
	});
});


ui("do_Button_2").on("touch",function(data,e){ 
	//按id查询联系人
	target_1.getDataById({id:ID[0]}, function(data, e) {
		label.text = JSON.stringify(data);
	});
});

ui("do_Button_6").on("touch",function(data,e){ 	
	//添加输入的联系人
	target_1.addData({paras:[{'name':"李四",'phone':"123456",'email':""},
	                        {'name':"李四",'phone':"123456",'email':""},
	                        {'name':"李四",'phone':"123456",'email':""},
	                        {'name':"李四",'phone':"123456",'email':""},
	                        {'name':"李四",'phone':"123456",'email':""},
	                        {'name':"王五",'phone':"abcde",'email':""},
	                        {'name':"王五",'phone':"abcde",'email':""},
	                        {'name':"王五",'phone':"abcde",'email':""},
	                        {'name':"王五",'phone':"abcde",'email':""},
	                        {'name':"王五",'phone':"abcde",'email':""},
	                        {'name':"王五",'phone':"abcde",'email':""},
	                        {'name':"王五",'phone':"abcde",'email':""}]}, function(data, e) {
		deviceone.print(data,"联系人的唯一标示");
		ID = data;
	});
});
