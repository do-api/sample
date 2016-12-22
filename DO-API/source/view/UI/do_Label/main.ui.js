/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-22
 */

var app = sm("do_App");
var page = sm("do_Page"); 
var nf = sm("do_Notification");
/**
 * 当前组件说明
 * 基类属性：参考http://store.deviceone.net/Documents/Base/UI.html#property
 * 特殊属性:
 * fontColor:字体颜色（16进制，前六位表示rgb,后两位表示透明度）,
 * fontSize:字体大小,
 * fontStyle:字体风格,normal：常规bold：粗体italic：斜体bold_italic：粗斜体（iOS平台不支持）
 * lineSpace:行间距,
 * maxHeigh:最大高度，height为"－1"的时候，label会根据text内容自动适配变宽，但是不会宽于maxWidth,
 * maxWith:最大宽度，width为"－1"的时候，label会根据text内容自动适配变宽，但是不会宽于maxWidth,
 * text:文本显示内容,
 * textAlign:文本对齐方式,
 * textFlag:字体标示（normal：常规underline ：下划线strikethrough ：删除线）
 */