/**
 * New DeviceOne File
 * 当前文档为蓝牙4.0测试用例，
 */
var app, page, nf, global;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
global = sm("do_Global");

var target_0 = mm("do_Bluetooth");
var target_1 = mm("do_Bluetooth","id1","app");
/*****************************************************************/
var os = sm("do_Device").getInfo().OS;
deviceone.print(JSON.stringify(os),"os");

var deviceMAC,deviceUUID,address;
/*****************************************************************/
var listview, listdata;
listview = ui("testlist");
listdata = mm("do_ListData");
listview.bindItems(listdata);

listdata.addData([
	{ template:0,"TAG":"0","METHOD":"open"},
	{ template:1,"TAG":"1","METHOD":"connect","P1":"address","V1":address,"P2":"serviceUUIDs","V2":"040BCECC-1992-425F-AFFB-74E376CE86F8"},
	{ template:1,"TAG":"2","METHOD":"write","P1":"data","V1":"写入数据123abcd","P2":"charUUID","V2":"28923DE7-2E5D-4E81-8264-86BE1B9C4B51"},
	{ template:0,"TAG":"3","METHOD":"close"},
]);
listview.refreshItems();

		var data = target_0.open();
	
			target_0.connect({address:deviceMAC, serviceUUIDs:["040BCECC-1992-425F-AFFB-74E376CE86F8"]}, function(data, e) {
				var Type = typeof(data);
				deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , index);
			})
		
			target_0.connect({address:deviceUUID, serviceUUIDs:["040BCECC-1992-425F-AFFB-74E376CE86F8"]}, function(data, e) {
				var Type = typeof(data);
				deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , index);
			})
		
		target_0.write({data:"写入数据123abcd", charUUID:"5216B2C4-0940-480A-89AA-D6FEAEDBDBB8"});
		deviceone.print(" 向特征UUID1写入数据  " , index);
	
		target_0.close();
		deviceone.print(" 关闭蓝牙  ", index);
	
/*****************************************************************/
target_0.on("characteristicChanged",function(data,e){
	
	var Type = typeof(data);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "characteristicChanged 事件 ");

})
target_0.on("connectionStateChange",function(data,e){
	
	var Type = typeof(data);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "connectionStateChange 事件 ");

})
target_0.on("scan",function(data,e){
	
	var Type = typeof(data);
	deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "scan 事件 ");
	
	address = data.address;
	
	var name = data.name;
	deviceone.print(name,"name");
	if(name == "nanyuantingfeng@ipad" && os == "iPhone OS"){
		deviceUUID = data.address
		deviceone.print(deviceUUID,"deviceUUID");
	}
	if(name == "nanyuantingfeng@ipad" && os == "android"){
		deviceMAC = data.address
		deviceone.print(deviceMAC,"deviceMAC");
	}
	
	
})
/*****************************************************************/