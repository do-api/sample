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
 
var do_TextField_1 = ui("do_TextField_1");
var do_TextField_2 = ui("do_TextField_2");
var label = ui("do_Label_2");
/**
 * @Event:focusIn 监听获得焦点
 */
do_TextField_1.on("focusIn", function(data, e) {
    label.text="focusIn";
});
/**
 * @Event:focusOut 监听失去焦点
 */
do_TextField_1.on("focusOut", function(data, e) {
         label.text="focusOut";
});
/**
 * @Event:textChanged 监听text文本改变
 */
do_TextField_1.on("textChanged", function(data, e) {
    do_TextField_2.text = this.text;// 将do_TextField_1文本赋值给do_TextField_2
});
