/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-26
 */

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var target = sm("do_Device");
var reslbl=ui("do_Label_2");

/***
 *  do_Device:属于sm没有自己的特殊属性，只有几个特殊方法
 *  基类网址： http://store.deviceone.net/Documents/Base/SM.html#property
 *  组件api网址：http://store.deviceone.net/documents/do_Device/3.9.html（以最新的为准） 
 */
/*****************************************/

//特殊方法
//getGPSInfo	获取设备GPS信息	异步方法
var btn1=ui("do_Button_1");
btn1.on("touch",function(data){
      target.getGPSInfo(function(tdata, e) {
	  if(tdata===undefined){
		  resultshow("getGPSInfo获取设备GPS信息异步方法	没有返回值"); 
	  }else{ 
		  var result ="getGPSInfo	获取设备GPS信息	异步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
		  resultshow(result);
	  } 
  })
 
	
});
//beep	系统通知提示音	同步方法
var btn2=ui("do_Button_2");
btn2.on("touch",function(data){
  var tdata = target.beep();
  if(tdata===undefined){ 
	  resultshow("beep	系统通知提示音	没有返回值");
  }else{ 
	  var result ="beep	系统通知提示音返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});
//screenShot	截屏	异步方法
var btn3=ui("do_Button_3");
btn3.on("touch",function(data){
      target.getGPSInfo(function(tdata, e) { 
	  if(tdata===undefined){
		  resultshow("screenShot截屏异步方法	没有返回值");  
	  }else{ 
		  var result ="screenShot截屏	异步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
		  resultshow(result);
	  } 
  }) 
});
//srceenShotAsBitmap	截屏	异步方法
var btn4=ui("do_Button_4");
btn4.on("touch",function(data){
		 var bitmap=mm("do_Bitmap");//可以当做一个图片
         target.srceenShotAsBitmap(
		  {
			  "bitmap":bitmap,
			  "rect":"0,0,300,200"
		  }, function(tdata, e) {
			  //通常获取了这个bitmap，
			  if(data===undefined){ 
				  resultshow("srceenShotAsBitmap截屏	异步方法	没有返回值，需要的时候可以操作这个图片");
			  }else{ 
				  var result ="srceenShotAsBitmap截屏	异步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
				  resultshow(result);
			  } 
		  }); 
});

//flash	开关闪光灯	同步方法
var btn5=ui("do_Button_5");

btn5.on("touch",function(data){
	var tdata= target.flash({"status":"on"});
	if(tdata===undefined){ 
		  resultshow("flash	开关闪光灯	同步方法	没有返回值，长按最上面的文字描述关闭闪光灯");
	}else{ 
		  var result ="beep	系统通知提示音返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
		  resultshow(result);
	} 
     
});
var layout=ui("do_ALayout_7");

layout.on("longTouch",function(data){
	var tdata= target.flash({"status":"off"});
	if(tdata===undefined){ 
		  resultshow("flash	开关闪光灯	同步方法	没有返回值 闪光灯关闭");
	}else{ 
		  var result ="beep	系统通知提示音返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
		  resultshow(result);
	} 
     
});
//getAllAppInfo	获取应用信息	同步方法
var btn6=ui("do_Button_6");
btn6.on("touch",function(data){
  var tdata = target.getAllAppInfo();
  if(tdata===undefined){ 
	  resultshow("getAllAppInfo	获取应用信息	同步方法	没有返回值");
  }else{ 
	  var result ="getAllAppInfo获取应用信息	同步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});
//getBattery	获取电量	同步方法
var btn7=ui("do_Button_7");
btn7.on("touch",function(data){
  var tdata = target.getBattery();
  if(tdata===undefined){ 
	  resultshow("flash	开关闪光灯	同步方法	没有返回值");
  }else{ 
	  var result ="getBattery获取电量	同步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});
//getInfo	获取设备信息	同步方法
var btn8=ui("do_Button_8");
btn8.on("touch",function(data){
  var tdata = target.getInfo();
  if(tdata===undefined){ 
	  resultshow("getInfo	获取设备信息	同步方法	没有返回值");
  }else{ 
	  var result ="getInfo获取设备信息	同步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});
//getLocale	获取系统环境	同步方法
var btn9=ui("do_Button_9");
btn9.on("touch",function(data){
  var tdata = target.getLocale();
  if(tdata===undefined){ 
	  resultshow("getLocale	获取系统环境	同步方法	没有返回值");
  }else{ 
	  var result ="getLocale获取系统环境	同步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});
//home	应用退到后台	同步方法
var btn10=ui("do_Button_10");
btn10.on("touch",function(data){
  var tdata = target.home();
  if(tdata===undefined){ 
	  resultshow("home	应用退到后台	同步方法 没有返回值");
  }else{ 
	  var result ="home	应用退到后台	同步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});
//setScreenAutoDarken	控制锁屏	同步方法
var btn11=ui("do_Button_11");
btn11.on("touch",function(data){
	
  var tdata = target.setScreenAutoDarken({"isAuto":false});
  //isAuto:为true时与系统设置保持一致，到了系统设置的自动锁屏时间则自动熄灭屏幕并锁屏；为false时则屏幕常亮，且不锁屏
  if(tdata===undefined){ 
	  resultshow("setScreenAutoDarken	控制锁屏	同步方法 没有返回值");
  }else{ 
	  var result ="setScreenAutoDarken	控制锁屏	同步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});

//vibrate	振动	同步方法
var btn12=ui("do_Button_12");
btn12.on("touch",function(data){
  var tdata = target.vibrate();
  if(tdata===undefined){ 
	  resultshow("vibrate	振动	同步方法没有返回值");
  }else{ 
	  var result ="vibrate	振动	同步方法返回值类型为：" +typeof(tdata)+",返回值为"+JSON.stringify(tdata);
	  resultshow(result);
  }    
});
//返回值展示；
function resultshow(data){
	reslbl.text=null;
	reslbl.text=data;
}









