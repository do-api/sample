/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-13
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 

var target = sm("do_Album"); 
ui("do_Button_1").on("touch",function(data){
    //	select	从系统相册选择照片	异步方法
	/***
	 * maxCount	Number	9	否	可设置让用户最多一次能选择图片的张数
     * width	Number		否	保存后的图片的宽度，不设置就是不缩放，宽度越小，图片的文件大小越小
     * height	Number		否	保存后的图片的高度，不设置就是不缩放，高度越小，图片的文件大小越小
     * quality	Number	100	否	清晰度1-100,缺省是100表示原始的图片质量，质量越小越模糊，但是图片的文件大小越小
     * iscut	Bool	false	否	只有在maxCount设置为1时该参数设置成true才有效。

     * 如果这个值为true的话，照片选择结束后会出现一个中间的取景界面，有一个矩形框让用户对照片进行裁剪。 
     * 这里可以参考do_ImageCropView组件来实现新的取景方法。 
     * 注:windows不支持这个参数。

	 * */
	target.select({
		maxCount:"", 
		width:"", 
		height:"", 
		quality:"", 
		iscut:""
	}, function(data, e) {
		var res= "返回值类型为："+typeof(data)+",返回结果为："+JSON.stringify(data);  
		if(data.length>0){
			ui("do_ImageView_2").set("source",data[0]);
			
			res+=",选则了图片，展示第一张以示说明"
		}
		resultshow(res);
		
	});
});

ui("do_Button_2").on("touch",function(data){
	//save	收藏图片到系统相册	异步方法
	/***
	 * path	String		是	要收藏的图片文件路径,只支持data://下文件
	 * name	String	default.jpg	否	收藏到相册后的图片的名称,如果要收藏多个图片，记得设置不同的名称，否则会被覆盖
	 * width	Number		否	保存后的图片的宽度，不设置就是不缩放，宽度越小，图片的文件大小越小
	 * height	Number		否	保存后的图片的高度，不设置就是不缩放，高度越小，图片的文件大小越小
	 * quality	Number	100	否	清晰度1-100,缺省是100表示原始的图片质量，质量越小越模糊，但是图片的文件大小越小
	 * */
	target.save({
		path:"source://view/SM/do_Album/image/xiaoren.png", 
		name:"data://txt/a.png", 
		width:"", 
		height:"", 
		quality:""
	}, function(data, e) {
		var res= "返回值类型为："+typeof(data)+",返回结果为："+JSON.stringify(data);
		resultshow(res);
	});
	
});

/************************************************************/
function resultshow(data){
	ui("do_Label_2").set("text",data);
	
}
