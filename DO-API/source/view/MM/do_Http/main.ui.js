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
http.url = "http://developer.deviceone.cn/test/index"; // 请求的 URL
/**
 * 请求成功
 */
http.on("success", function(data) {
	resultshow("GET success:"+ data); 
});
 
/**
 * 请求失败
 */
http.on("fail", function(data) {
	resultshow("GET fail返回值类型为："+typeof(data)+"返回值为:"+ JSON.stringify(data)); 
   
});
http.on("progress", function(data) {
    label_info.text = data
});
 
/** ******************************************************************************************************* */
 
var http2;
http2 = mm("do_Http");
http2.method = "POST";
http2.timeout = 30000;
http2.contentType = "application/json";
http2.url = "http://developer.deviceone.cn/test/TestPost";
http2.on("success", function(data) {
    label_info.text = "POST success:"+data;
});
http2.on("fail", function(data) {
    label_info.text = data
});
http2.on("progress", function(data) {
    label_info.text = data
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
    label_info.text = "download:success";
    ui("do_ImageView_5").source="data://xiazai.png";
});
http4.on("fail", function(data) {
    label_info.text = data;
});
http4.on("progress", function(data) {
    label_info.text = data;
    do_ProgressBar_1.progress = data.currentSize * 100 / data.totalSize;
});
 
/** ******************************************************************************************************* */
 
var http3;
http3 = mm("do_Http");
http3.timeout = 30000;
http3.contentType = "audio/wav";
http3.url = "http://developer.deviceone.cn/test/Upload";
 
http3.on("success", function(data) {
    label_info.text = data;
});
http3.on("fail", function(data) {
    label_info.text = data;
});
http3.on("progress", function(data) {
    label_info.text = data;
    do_ProgressBar_1.progress = data.currentSize * 100 / data.totalSize;
});
 
/** ******************************************************************************************************* */
 
var e_get, e_post, e_upload, e_download;
 
e_get = ui("e_get");
e_post = ui("e_post");
e_upload = ui("e_upload");
e_download = ui("e_download");
 
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
    http3.upload("data://a.zip", "file");
});
 
e_download.on("touch", function() {
    /**
     * @http.download(path);
     * @path : 文件保存路径;
     */
    http4.download("data://xiazai.png");
});



/*********************************************/
function  resultshow(data){
	ui("do_Label_2").set("text",data);
}


