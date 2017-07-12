var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var global = sm("do_Global");
var external = sm("do_External");
var rootview = ui("$");

page.on("back", function() { // 监听android 的返回按钮;
    app.closePage();
});
ui("go_back").on("touch", function() {
	app.closePage();
});


var do_DataTable_1 = ui("do_DataTable_1");
var title = ["大区","平台","XPS13Q1销量目标","XPS13Q1销量完成","13Q1完成率","XPS15Q1销量目标","XPS15Q1销量完成","15Q1完成率","XPS134月开单目标","XPS13开单完成","134月完成率","XPS15开单目标","XPS15开单完成","154月完成率"]
var _datas = [
      ["全部","","11000","6857","62%","2800","1285","46%","623","258","41%","170","50","29%","","","","","","","",""],
      ["北区","北京","1858","715","38%","473","108","23%","115","29","25%","19","4","21%","","","","","","","",""],
      ["北区","沈阳+哈尔滨","1247","353","28%","317","50","16%","75","26","35%","13","2","15%","","","","","","","",""],
      ["北区","郑州","809","296","37%","206","48","23%","38","16","42%","13","2","15%","","","","","","","",""],
      ["东区","杭州","439","486","111%","112","89","80%","27","19","70%","8","5","63%","","","","","","","",""],
      ["东区","济南","1091","346","32%","278","161","58%","55","24","44%","12","","0%","","","","","","","",""],
      ["东区","南京+合肥","921","736","80%","234","128","55%","66","36","55%","16","6","38%","","","","","","","",""],
      ["东区","上海","531","696","131%","135","135","100%","17","17","100%","14","7","50%","","","","","","","",""],
      ["南区","长沙+南昌","494","269","54%","126","37","29%","34","8","24%","7","1","14%","","","","","","","",""],
      ["南区","福州","180","196","109%","46","11","24%","15","4","27%","4","","0%","","","","","","","",""],
      ["南区","广东+广西+深圳","942","1068","113%","240","148","62%","48","21","44%","18","6","33%","","","","","","","",""],
      ["西区","成都","1038","709","68%","264","134","51%","62","26","42%","18","6","33%","","","","","","","",""],
      ["西区","武汉","548","524","96%","139","91","65%","22","13","59%","8","4","50%","","","","","","","",""],
      ["西区","西安+新疆","904","463","51%","230","145","63%","49","19","39%","20","7","35%","","","","","","","",""]
]
var _style = [
      {"row":1,"column":7,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":2,"column":7,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":3,"column":7,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":8,"column":7,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":9,"column":7,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":1,"column":4,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":2,"column":4,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":3,"column":4,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":5,"column":4,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":8,"column":4,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":13,"column":4,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":0,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":1,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":2,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":3,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":5,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":6,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":8,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":9,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":10,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":11,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":12,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":13,"column":10,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":0,"column":13,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":1,"column":13,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":2,"column":13,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":3,"column":13,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":5,"column":13,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":8,"column":13,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":9,"column":13,"style":{"fontColor":"FF0000FF","fontSize":28}},
      {"row":0,"column":0,"style":{"fontColor":"4A75E6FF","fontSize":28}}
 ]
var height = ["100","150","150","150","150","150","150","150","150","150","150","150","150","150"]

	
do_DataTable_1.setHeaderStyle(height, "100", "FFFFFFFF", "000000FF", "normal", "normal", 28);
do_DataTable_1.setRowStyle("100", ["FFFFFFFF"], "000000FF", "normal", "normal", 28);
do_DataTable_1.setHeaderData(title);
do_DataTable_1.setRowData(_datas);
do_DataTable_1.setCellDatas(_style)

ui("do_ALayout_next").on("touch",function(){
	app.openPage("source://view/main.ui")
})