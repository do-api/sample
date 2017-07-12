/***********************************************************************************************************
 * @Author : child
 **********************************************************************************************************/
var app, page, nf, global;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
global = sm("do_Global");

var target_0 = sm("do_SocketServer");
var target_1 = sm("do_SocketServer","id1","app");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/*****************************************************************/
var name = page.getData();
ui("do_label_1").text = name;

var result = ui("result");
/*****************************************************************/

ui("send1").on("touch",function(){
	var CLIENTIP = ui("ip").text.trim();
	var CLIENTPORT = ui("port").text.trim();
	target_0.send({type:"UTF-8", content:"你好10", clientIP:CLIENTIP, clientPort:CLIENTPORT}, function(data, e) {
		result.text = data;
		deviceone.print(data,"发送是否成功");
	})
})

ui("send2").on("touch",function(){
	var CLIENTIP = ui("ip").text.trim();
	var CLIENTPORT = ui("port").text.trim();
	target_0.send({type:"GBK", content:"你好10", clientIP:CLIENTIP, clientPort:CLIENTPORT}, function(data, e) {
		result.text = data;
		deviceone.print(data,"发送是否成功");
	})
})

var cont = "0000003900010001001000010000000531323334350000000B31333831323334353637380000000131650000000B313338313233343536373800000000";
ui("send3").on("touch",function(){
	var CLIENTIP = ui("ip").text.trim();
	var CLIENTPORT = ui("port").text.trim();
	target_0.send({type:"HEX", content:cont, clientIP:CLIENTIP, clientPort:CLIENTPORT}, function(data, e) {
		result.text = data;
		deviceone.print(data,"发送是否成功");
	})
})

ui("send4").on("touch",function(){
	var CLIENTIP = ui("ip").text.trim();
	var CLIENTPORT = ui("port").text.trim();
	target_0.send({type:"file", content:"initdata://d.txt", clientIP:CLIENTIP, clientPort:CLIENTPORT}, function(data, e) {
		result.text = data;
		deviceone.print(data,"发送是否成功");
	})
})

ui("close").on("touch",function(){
	target_0.stopListen();
	result.text = "stopListen";
	deviceone.print("stopListen");
})

ui("startLisnen").on("touch",function(){
	var SERVERPORT = ui("do_TextField_1").text.trim();
	target_0.startListen({serverPort:SERVERPORT});
	result.text = "startLisnen";
	deviceone.print("startLisnen");
})

/*****************************************************************/
target_0.on("error",function(data,e){
	
	var Type = typeof(data);
	result.text = "error 事件 " + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "error 事件 ");

})
target_0.on("listen",function(data,e){
	
	var Type = typeof(data);
	result.text = "listen 事件 " + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "listen 事件 ");

})
target_0.on("receive",function(data,e){
	
	var Type = typeof(data);
	result.text = "receive 事件 " + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "receive 事件 ");

})
/*****************************************************************/
