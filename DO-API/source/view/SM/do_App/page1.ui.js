/**
 * related to page1.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-13
 */

var app = sm("do_App");
var page = sm("do_Page");

page.on("back",function(){
	app.closePage();
}); 


ui("do_Button_1").on("touch",function(data){
	 
		app.openPage(
				{
					source: "source://view/SM/do_App/page2.ui",
					id:"app_page2"
				});
		
}); 


//update

ui("do_Button_2").on("touch",function(data){
	/***
	 * openPage	弹出新的页面	异步方法
	 *  
	 *  source	Node		否	仅支持data目录下一个或多个子目录或者文件，只处理能找到的文件或目录
	 *  target	String		否	只允许是source目录，如果目录不存在，则创建对应的目录
	 **/ 
	var initdata = sm("do_InitData");
	initdata.copyFile("initdata://do_App/update.zip","data://",function(data, e){
		deviceone.print(JSON.stringify(data[pagedata.$tag]),"tag");
		 
	});
		app.update({source:"", target:""}, function(data, e) {
			
			
		}) 
		
	});

function upgrade() {
  // 获取当前应用的版本号
  var current_version = storage.readFileSync("data://version.txt");
  // 获取服务端最新的版本号,并下载升级
  // 因为没有搭建一个真正的升级服务，所以先注释这一行且直接调用update方法
  // getLatestVersion(current_version);
  update("1.1", "data://update.zip");
}
//从服务器上获取最新的版本号
function getLatestVersion(ver) {
  var http = mm("do_Http");
  http.method = "GET";
  http.url = "http://www.xxxx.com/getLatestVersion?current=" + ver;
  http.on("success", function(d) {
      // 服务端判断最新的版本不等于当前的版本就会返回一个最新版本和下载地址，否则返回空
      if (d) {
          // 开始下载最新zip
          download(d);
      } else
          nf.alert("当前版本已经是最新版本");
  });
  http.request();
}
//从服务器上获取最新的升级包
function download(d) {
  var http = mm("do_Http");
  var zip = "data://update.zip";
  http.method = "POST";
  // d.downlaodURL是zip的下载url，d.version是最新的版本号
  http.url = d.downloadURL;
  http.on("success", function(d) {
      update(d.version, zip);
  });
  http.download(zip);
}
//解压，然后覆盖旧的文件，然后更新本地版本号
function update(ver, zip) {
  storage.unzip(zip, "data://update", function(data) {
      // 这里可以拷贝文件，也可以拷贝目录
      app.update([ "data://update/test.ui", "data://update/test.ui.js" ],
              "source://view", function() {
                  nf.alert("升级完成");
                  storage.writeFile("data://version.txt", "1.1",function(){
                      app.closePage();
                  });
              });
  })
}