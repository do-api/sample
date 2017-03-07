/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-09
 */

var app, page, nf;
app = sm("do_App");
page = sm("do_Page"); 
nf = sm("do_Notification");

page.on("back", function() {
    app.closePage()
}); 

//clearAll	输入框中显示叉号
//clearImg	删除标记图片
//cursorColor	光标颜色
//enabled	是否可编辑
//enterText	按钮文字
//fontColor	字体颜色
//fontSize	字体大小
//fontStyle	字体风格
//hint	提示信息
//hintColor	提示信息字体颜色
//inputType	输入类型
//maxLength	可允许输入的最大长度
//password	隐藏输入字符
//text	文本内容
//textAlign	文本对齐方式
//textFlag	字体标示
 
 

 
/** ******************************************************************************************************* */
  
var label = ui("do_Label_4");

/**
 * @Event:focusIn 监听获得焦点
 */
ui("do_TextField_13").on("focusIn", function(data, e) {
    label.text="监听获得焦点,返回值为："+JSON.stringify(data);
});
/**
 * @Event:focusOut 监听失去焦点
 */
ui("do_TextField_13").on("focusOut", function(data, e) {
         label.text="监听失去焦点";
});

/**
 * @Event:enter 监听键盘右下角按钮时触发
 */
ui("do_TextField_13").on("enter", function(data, e) {
         label.text="监听键盘右下角按钮时触发";
});
/**
 * @Event:textChanged 监听text文本改变
 */
ui("do_TextField_13").on("textChanged", function(data, e) {
	ui("do_TextField_13").text = this.text;// 将do_TextField_1文本赋值给do_TextField_2
    
    label.text="监听text文本改变，返回值为："+JSON.stringify(data);
    
});
