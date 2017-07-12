var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var global = sm("do_Global");
var external = sm("do_External");


page.on("back", function() { // 监听android 的返回按钮;
    app.closePage();
});
ui("go_back").on("touch", function(data) {
	app.closePage();
});

var do_DataTable_scqy = ui("do_DataTable_scqy");

var pdata = {
	    "Count": 4,
	    "result": [
	        {
	            "Id": "2886ae68271746c69ee014aff71d3459",
	            "MName": "4月份市场调研",
	            "MProductName": 0,
	            "MInformationName": 0,
	            "CreateUserName": "管理员",
	            "EndDate": "2017-04-25T16:00:00",
	            "PersonCom": 5,
	            "PersonAll": 38
	        },
	        {
	            "Id": "7bcd95f6b97a4ce196a4ffe1e05c2767",
	            "MName": "产品经理市场调研",
	            "MProductName": 1,
	            "MInformationName": 0,
	            "CreateUserName": "韩啸",
	            "EndDate": "2017-04-26T00:00:00",
	            "PersonCom": 1,
	            "PersonAll": 4
	        },
	        {
	            "Id": "a58fc1fef15942b8a3f5bfce28453c50",
	            "MName": "测试",
	            "MProductName": 0,
	            "MInformationName": 1,
	            "CreateUserName": "奚修堂",
	            "EndDate": "2017-05-24T00:00:00",
	            "PersonCom": 2,
	            "PersonAll": 66
	        },
	        {
	            "Id": "0eca2c6cb3a347ffac42e168bb0f8ca0",
	            "MName": "Hh",
	            "MProductName": 1,
	            "MInformationName": 1,
	            "CreateUserName": "韩啸",
	            "EndDate": "2017-05-25T00:00:00",
	            "PersonCom": 0,
	            "PersonAll": 4
	        }
	    ]
	};
var pl_list = [
  	{"id": 0, "text": 'DT'}, 
  	{"id": 1, "text": 'NB'}, 
  	{"id": 2, "text": 'LCD'}, 
  	{"id": 3, "text": '其它'}
];
var xxlx_list = [
  	{"id": 0, "text": '渠道'}, 
  	{"id": 1, "text": '产品'}, 
  	{"id": 2, "text": '竞争对手'}, 
  	{"id": 3, "text": '其它'}
];

if (pdata.result.length != 0){
	var title = ["主题","产品品类","信息类型","截止时间","完成/对象数","发起人"];
	var lists = [];
	pdata.result.forEach(function(v,k){
		v.num = v.PersonCom+"/"+v.PersonAll;
		v.time = v.EndDate.substring(0,10);
		var _item = [];
		_item.push(v.MName,pl_list[v.MProductName].text,xxlx_list[v.MInformationName].text,v.time,v.num,v.CreateUserName);
		lists.push(_item);
	});
	var title_width = ["250","150","150","150","200","150"]
	do_DataTable_scqy.setHeaderStyle(title_width, "120", "f2f2f2FF", "000000FF", "normal", "normal", 30);
	do_DataTable_scqy.setRowStyle("120", ["FFFFFFFF"], "000000FF", "normal", "normal", 30);
	do_DataTable_scqy.setHeaderData(title);
	do_DataTable_scqy.setRowData(lists);
}

