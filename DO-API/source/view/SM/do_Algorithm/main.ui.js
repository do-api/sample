/**
 * related to mian.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-14
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 


var target1 = sm("do_Algorithm");//实例化一个位图对象 

/**
 * SM 组件方法
 *    特殊方法示例如下
 *    base64 
 *    des3
 *    hex2Binary
 *    hex2Str
 *    md5
 *    sha1
 *    xml2Json
 *    
 * */ 

//type	String	encode	否	目前支持两种类型，'encode'为编码、'decode'为解码
//sourceType	String	string	否	支持两种'string':字符串类型、 'file'：文件类型,如果是file类型的话，encode是把一个file读出内容编码为base64字符串，如果是decode的时候是把一个base64字符串解码为一个data://temp/随机名字的文件
//source	String		否	
ui("do_Button_1").on("touch",function(){
 
	target1.base64({
		type:"encode",
		sourceType:"file",
		source:"source://view/SM/do_Algorithm/images/wx.png"
	},function(data){
		deviceone.print(JSON.stringify(data));
	});
}); 

/**
 * des3（异步方法）3DES算法
 * */
//key	String		是	3DES算法的key值
//type	String	encrypt	否	目前支持两种类型，'encrypt'为加密、'decrypt'为解密
//source	String		否	
ui("do_Button_2").on("touch",function(){
	target1.des3({key:"", type:"", source:""}, function(data, e) {
		showreslut("des3加密结果为："+JSON.stringify(data)+",返回值类型为："+typeof(data)); 
	});
	
}); 

/**
 *  hex2Binary（异步方法） 十六进制转二进制
 * */

//source	String		是	用十六进制字符串表示的数据
//path	String		是	要保存的二进制文件全路径,支持data://
ui("do_Button_3").on("touch",function(data){
	target1.hex2Binary({source:"ffffffe", path:"data://hex2Binary"}, function(data, e) {
		showreslut("hex2Binary加密结果为："+JSON.stringify(data)+",返回值类型为："+typeof(data)); 
	});
	
});

/**
 * hex2Str（异步方法）十六进制转字符串
 * */
//source	String		是	用十六进制字符串表示的数据
//encoding	String	utf-8	否	指定编码格式，默认使用utf-8格式

ui("do_Button_4").on("touch",function(){
	target1.hex2Str({source:"ffffffe", encoding:"utf-8"}, function(data, e) {
		showreslut("hex2Str加密结果为："+JSON.stringify(data)+",返回值类型为："+typeof(data)); 
	});
	 
});
/**
 * md5（异步方法）md5算法
 * */
//type	String	string	否	目前支持两种类型，'string'为字符串类型、'file'为文件类型
//value	String		否	如果type为'string'类型，是一个字符串的值；如果为'file'类型，这就是一个文件的路径，只支持data://数据区目录
ui("do_Button_5").on("touch",function(){
	target1.md5({type:"string", value:"deviceone"}, function(data, e) { 
		showreslut("加密结果为："+JSON.stringify(data)+",返回值类型为："+typeof(data)); 
	})
});

/**
 * sha1（异步方法）	安全哈希算法
 * */
//type	String	lowercase	否	目前支持两种类型，'uppercase'为加密后返回大写字母、'lowercase'为加密后返回小写字母
//value	String		否	
ui("do_Button_6").on("touch",function(){
	target1.sha1({type:"uppercase", value:"deviceone"}, function(data, e) {
		showreslut("xml2Json加密结果为："+JSON.stringify(data)+",返回值类型为："+typeof(data)); 
	})
});
/**
 *  xml2Json（异步方法） xml转Json
 * */
//source	String		是  一个xml格式的字符串
ui("do_Button_7").on("touch",function(){
	var str="<as><a>name:</a><b>deviceone</b></as>";
	target1.xml2Json(str, function(data, e) {
		showreslut("xml2Json加密结果为："+JSON.stringify(data)+",返回值类型为："+typeof(data)); 
	}); 
});

/**********************************************/
function  showreslut(data){ 
	ui("do_Label_2").set("text",data);
}
