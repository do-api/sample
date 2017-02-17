/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-06
 */ 

var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 


/**
 * http  用户遇到的问题比较多
 * 
 * 可以用http组件，也可以用封装的dojs
 * 组件：每个参赛都要自己配置，写法比较比较接近类的定义
 * dojs：与js语言比较接近，格式跟ajax类似，比较常规 
 * 
 * */ 

/**
 * 请求中
 * 
 * @data => { currentSize : Number , totalSize : Number}
 */
var http = mm("do_Http");
http.method = "GET";// GET | POST
http.timeout = 30000; // 超时时间 : 单位 毫秒
http.contentType = "application/json"; // Content-Type
http.url = "http://182.92.198.3/webencode/test/GetHeader"; // 请求的 URL 
http.responseEncoding = "GBK";
/**
 * 请求成功
 */
http.on("success", function(data) {
	resultshow("GET success:返回值类型为"+typeof(data)+"返回值为:"+ JSON.stringify(data)); 
});
 
/**
 * 请求失败
 */
http.on("fail", function(data) {
	resultshow("GET fail返回值类型为："+typeof(data)+"返回值为:"+ JSON.stringify(data)); 
   
});
http.on("progress", function(data) {
	resultshow("GET fail返回值类型为："+typeof(data)+"返回值为:"+ JSON.stringify(data));  
});
 
/** ******************************************************************************************************* */
 
var http2;
http2 = mm("do_Http");
http2.method = "POST";
http2.timeout = 30000;
http2.contentType = "application/json";
http2.url = "http://182.92.198.3/webencode/test/GetHeader";
http2.on("success", function(data) {
	resultshow("POST success:"+typeof(data)+"返回值为:"+ JSON.stringify(data));   
});
http2.on("fail", function(data) {
	resultshow("POST fail:"+typeof(data)+"返回值为:"+ JSON.stringify(data));    
});
http2.on("progress", function(data) {
	resultshow("POST progress:"+typeof(data)+"返回值为:"+ JSON.stringify(data));    
});
 
/** ************************************* */
 
var do_ProgressBar_1 = ui("do_ProgressBar1_1");
 
/** ******************************************************************************************************* */
 
var http4;
 
http4 = mm("do_Http");
http4.timeout = 30000;
http4.contentType = "application/json";
http4.url = "http://g.hiphotos.baidu.com/zhidao/pic/item/b17eca8065380cd79f8ccc3fa144ad3458828155.jpg";
 
http4.on("success", function(data) {
	resultshow("download:success");  
    ui("do_ImageView_1").source="data://xiazai.png";
});
http4.on("fail", function(data) {
	resultshow("download fail:"+typeof(data)+"返回值为:"+ JSON.stringify(data));    
   
});
http4.on("progress", function(data) {
	resultshow("download progress:"+typeof(data)+"返回值为:"+ JSON.stringify(data));  
    do_ProgressBar_1.progress = data.currentSize * 100 / data.totalSize;
});
 
/** ******************************************************************************************************* */
 
var http3;
http3 = mm("do_Http");
http3.timeout = 30000;
http3.contentType = "multipart/form-data";
http3.url = "http://182.92.198.3/webencode/test/Upload"; 
http3.method = "POST"; 

 
http3.on("success", function(data) { 
	resultshow("Upload success:"+typeof(data)+"返回值为:"+ JSON.stringify(data));   
});
http3.on("fail", function(data) {
	resultshow("Upload fail:"+typeof(data)+"返回值为:"+ JSON.stringify(data));   
});
http3.on("progress", function(data) {
	resultshow("Upload progress:"+typeof(data)+"返回值为:"+ JSON.stringify(data));  
    do_ProgressBar_1.progress = data.currentSize * 100 / data.totalSize;
});

var http5  = mm("do_Http");
http5.timeout = 30000;
http5.method = "DELETE";
http5.url = "http://182.92.198.3/webencode/test/TestHttpDelete";  
http5.on("success", function(data) { 
	resultshow("delete success:"+typeof(data)+"返回值为:"+ JSON.stringify(data));   
});
http5.on("fail", function(data) {
	resultshow("delete fail:"+typeof(data)+"返回值为:"+ JSON.stringify(data));   
});
http5.on("progress", function(data) {
	resultshow("delete progress:"+typeof(data)+"返回值为:"+ JSON.stringify(data));  
    do_ProgressBar_1.progress = data.currentSize * 100 / data.totalSize;
});
 
/** ******************************************************************************************************* */
 
var e_get, e_post, e_upload, e_download,e_delete;
 
e_get = ui("e_get");
e_post = ui("e_post");
e_upload = ui("e_upload");
e_download = ui("e_download");
e_delete=ui("e_delete");
e_get.on("touch", function() {
    /**
     * @http.request() ; 发出请求.
     */
    http.request();
});
 
e_post.on("touch", function() {
    http2.request();
});
 
e_upload.on("touch", function() {
    /**
     * @http.upload(path, name);
     * @path : 上传的文件路径;
     * @name : 上传的文件名称;//网页表单风格上传;
     */
	sm("do_InitData").copyFile({source:"initdata://do_Http/a.txt", target:"data://http/a.txt"}, function(data, e) {
		http3.upload({path:"data://http/a.txt", name:"file"});
	});
});
 
e_download.on("touch", function() {
    /**
     * @http.download(path);
     * @path : 文件保存路径;
     */
    http4.download("data://xiazai.png");
});

e_delete.on("touch",function(){ 
 
	target_0.request();
	
});

/*********************************************/
function  resultshow(data){
	ui("do_Label_2").set("text",data);
}


