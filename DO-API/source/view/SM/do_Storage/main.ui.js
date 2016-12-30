/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-30
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

var do_Label_1 = ui("do_Label_1");
/***************************/
//定义do_Storage实例
var target_1 = sm("do_Storage");

ui("dirExist").on("touch",function(){

	var value0 = target_1.dirExist("data://test2");
	do_Label_1.text = "判断目录是否存在:" + value0;
	
})  

ui("fileExist").on("touch",function(){
	
	var value1 = target_1.fileExist("data://test1/tImage.jpg");
	do_Label_1.text = "判断文件是否存在:" + value1;
	
})   

ui("getFiles").on("touch",function(){
	
	target_1.getFiles("data://test1", function(data, e) {
		do_Label_1.text = "获取文件列表:" + data;
	})
	
})   

ui("getDirs").on("touch",function(){

	target_1.getDirs("data://", function(data, e) {
		do_Label_1.text = "获取目录列表:" + data;
	})
	
})   

ui("deleteFile").on("touch",function(){

	target_1.deleteFile("data://test4/dFile.txt", function(data, e) {
		do_Label_1.text = "删除的文件是否存在:" + data;
	})
	
})

ui("deleteDir").on("touch",function(){

	target_1.deleteDir("data://test4", function(data, e) {
		do_Label_1.text = "删除的目录是否存在:" + data;
	}) 
	
})  

ui("readFile").on("touch",function(){

	target_1.readFile("data://test1/test11/ttt.txt", function(data, e) {
		do_Label_1.text = "读取文件内容:" + data;
	})
	
})   

ui("writeFile").on("touch",function(){

	target_1.writeFile("data://test1/test11/ttt2.txt", "write the new content", function(data, e) {
		
		do_Label_1.text = "写入文件是否成功:" + data;
		target_1.readFile("data://test1/test11/ttt2.txt", function(data, e) {
		    do_Label_1.text = "读出刚写入的文件:" + data;
	    })
	})
	
})   

ui("zip").on("touch",function(){

	target_1.zip("data://test3/dFile.txt", "data://zip/dFile.zip", function(data, e) {
		do_Label_1.text = "压缩单个文件是否成功:" + data;
	})
	
}) 

var zipFile1 = [
	"data://test1/test11/ttt.txt",
	"data://test3/dFile.txt"
];

ui("zipFiles").on("touch",function(){

	target_1.zipFiles(zipFile1, "data://zipFile.zip", function(data, e) {
		do_Label_1.text = "压缩多个文件是否成功:" + data;
	})
	
})  

ui("unzip").on("touch",function(){

	target_1.unzip("data://zipFile.zip", "data://zip123", function(data, e) {
		do_Label_1.text = "解压缩文件是否成功:" + data;
	})
	
})  

ui("copy").on("touch",function(){

	target_1.copy(["data://test2/222.txt","data://test4/dFile.txt"], "data://copy", function(data, e) {
		do_Label_1.text = "拷贝文件是否成功:" + data;
		deviceone.print("拷贝文件");
		target_1.getDirs("data://copy", function(data, e) {
//			do_Label_1.text = JSON.stringify(data);
		})
	})
	
})
