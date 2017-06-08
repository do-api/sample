/*
 * 论坛使用说明：http://bbs.deviceone.net/forum.php?mod=viewthread&tid=1891&extra=page%3D1
 */

// 必有
var ADDRESS; // 准确记录地址， connect方法调用时传递的值。
// 必有 下面的UUID参数不可修改
var SUUID,witeUUID,readUUID,notifyUUID;
SUUID = "ACFAB58A-2475-49E9-9C49-F042F624DA4F"; // BleDemo作为蓝牙外设发送服务的uuid
witeUUID = "A8F7C5E4-32D1-4D90-A197-7143E73BC155";// BleDemo作为蓝牙外设可写特征的uuid
readUUID = "5C12B902-EC54-44FD-AF78-8C3F7FD90D26";// BleDemo作为蓝牙外设可读特征的uuid
notifyUUID = "90D94F8F-D2B9-40B7-96BE-D284BC3247F1";// BleDemo作为蓝牙外设通知特征的uuid


var os = sm("do_Device").getInfo().OS;  // 当前debuger设备的系统，scan事件中需要
deviceone.print(JSON.stringify(os),"os");

var bluetooth = mm("do_Bluetooth");
var openButton,startScanButton,connectButton,writeButton,readButton;

openButton = ui("do_Button_1");
startScanButton = ui("do_Button_2");
connectButton = ui("do_Button_3");
writeButton = ui("do_Button_4");
readButton = ui("do_Button_5");


//***********************************************连接蓝牙外设操作************************************************************************
openButton.on('touch', function(){ // 打开蓝牙, iPhone iOS10之后的调试设备请手动打开蓝牙
    var data = bluetooth.open();
    var Type = typeof(data);    
    deviceone.print("打开蓝牙 返回值类型：" + Type + " 返回值：" + JSON.stringify(data));
});

startScanButton.on('touch', function(){ //  开始扫描 方法调用前，打开BleDemo，点击“ios作为”
        var data = bluetooth.startScan();
        var Type = typeof(data);
//        result.text = index + " 返回值类型：" + Type + " 返回值：" + JSON.stringify(data);
        deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data));
});

connectButton.on('touch', function(){  // 开始连接， 为了准确连接到外围设备，该方法请在控制台打印 “deviceMAC-> ” + “地址” 信息后再调用，因为该字符串打印后表明准确的拿到了ADDRESS
    var data = bluetooth.connect({address:ADDRESS});
    var Type = typeof(data);
    deviceone.print("连接蓝牙外设，地址: " + ADDRESS + "返回值类型：" + Type + " 返回值：" + JSON.stringify(data));
});
//***********************************************连接蓝牙外设操作************************************************************************


//***********************************************读写操作************************************************************************

writeButton.on('touch', function(){ // 写
        deviceone.print(" write ");
        bluetooth.write({data:"这是测试的写入数据", sUUID:SUUID, cUUID:witeUUID, length:""});
});

readButton.on('touch', function(){ // 读
        deviceone.print("read");
        bluetooth.read({sUUID:SUUID, cUUID:readUUID});
});

ui("do_Button_6").on("touch",function(data){
	
	  bluetooth.close();
});

ui("do_Button_7").on("touch",function(data){
	
	 var _d =  bluetooth.enable();
	  deviceone.print(_d,"安卓打开蓝牙");
});

ui("do_Button_8").on("touch",function(data){
	
	 var _d =   bluetooth.disable();
	 deviceone.print(_d,"安卓关闭蓝牙");
});

//***********************************************读写操作************************************************************************


//***********************************************事件监听************************************************************************

bluetooth.on("characteristicChanged",function(data,e){ 
    
    var Type = typeof(data);
    deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "characteristicChanged 事件 ");

})

bluetooth.on("connectionStateChange",function(data,e){
    
    var Type = typeof(data);
    deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "connectionStateChange 事件 ");

})

// 监听扫描事件，扫描到BleDemo发出的服务别名停止扫描准确连接到安装蓝牙外设demo的iPhone设备
bluetooth.on("scan",function(data,e){
    
    var Type = typeof(data);
    deviceone.print(" 返回值类型：" + Type + " 返回值：" + JSON.stringify(data) + " 错误信息：" + JSON.stringify(e) , "scan 事件 ");
    
    if(os == "iPhone OS"){ // 根据控制台的具体打印 “os” 数据修改
        if((data.name == "DeviceOneBluetoothPeripheral") || (data.name == "Z5s")){
            ADDRESS = data.address
            deviceone.print("deviceUUID->" + data.address);
            bluetooth.stopScan();
        }
        
    }
    if(os == "android"){ //  根据控制台的具体打印“os”数据修改
        if(data.name == "DeviceOneBluetoothPeripheral") {
            ADDRESS = data.address
            deviceone.print("deviceMAC->" + data.address,"ok-----");
            bluetooth.stopScan();
        }
    }
})
//***********************************************事件监听************************************************************************