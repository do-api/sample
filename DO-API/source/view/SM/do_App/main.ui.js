/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-04
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification"); 

page.on("back",function(){
	app.closePage();
}); 



//应用中有两个作用域，分别是： app，page
//它主要操作的对象是page：更多page概念的介绍参考进阶教程：http://doc.deviceone.net/web/doc/detail_course/page_details.htm
ui("do_Button_1").on("touch",function(data){
/***
 * openPage	弹出新的页面	异步方法
 *  
 *  //	    source	String		是	路径支持source://和data://目录。关于文件协议说明可以参考Storage类。
	//		data	String		否	页面之间的数据传递。比如在页面A的基础上弹出页面B，页面A可以通过data参数把数据传递到页面B，页面B可以通过Page的getData方法来获取传递过来的数据
	//		animationType	String	slide_l2r	否	winphone8不支持该动画效果，android和ios支持。目前支持以下几种：
	//								'slide_l2r': 从左至右滑出
	//								'slide_r2l': 从右至左滑出
	//								'slide_b2t': 从底至上滑出
	//								'slide_t2b': 从上至底滑出
	//								'push_l2r': 从左至右推出
	//								'push_r2l': 从右至左推出
	//								'push_b2t': 从底至上推出
	//								'push_t2b': 从上至底推出
	//								'fade' : 淡入淡出
	//								'page_curl' : 上翻页
	//								'page_uncurl' : 下翻页
	//								'cube' :立体翻转
	//								'slide_l2r_1'：从左至右滑出（旧页淡出效果）
	//								'slide_r2l_1'：从右至左滑出（旧页淡出效果）
	//								'push_l2r_1': 从左至右推出（旧页被遮盖）
	//								'push_r2l_1': 从右至左推出（旧页被遮盖）
	//		keyboardMode	String	hidden	否	当屏幕中有焦点时是否弹出软键盘（default--跟系统保持一致[已废弃]，visible--总是弹出，hidden--总是隐藏）
	//		scriptType	String		否	若参数有值，则打开的ui文件对应的脚本文件就是这个参数对应的文件。比如若参数有值，且为javascr，则打开xx.ui.js否则打开xx.ui.lua，若参数没有值，则打开系统全局配置的语言类型脚本文件
	//		statusBarState	String	show	否	打开一个新的page的时候，控制顶部状态栏显示的状态，有三种值show:缺省值，表示顶部状态栏显示，所有视图都是从状态栏下开始显示；hide: 表示状态栏消失，所有视图都是从屏幕最顶端开始显示；transparent:表示状态栏透明，所有视图是从屏幕最顶端开始显示，可以透过状态栏看到底下的视图。 该属性android只有4.4版本后支持
	//		statusBarFgColor	String	black	否	打开一个新的page的时候，如果不是全屏的话，顶部状态栏字体的前景色，只能为'white'和'black'两种值，仅支持iOS平台
	//		statusBarBgColor	String	000000FF	否	打开一个新的page的时候，如果不是全屏的话，顶部状态栏背景色，默认值为000000FF(黑色)
	//		id	String		否	打开一个新的page的时候，增加一个打开的Page的唯一标示，id不能重复，如果重复则从上往下找到第一个为准
 * 
 */
 	
 
	app.openPage({
		source:"source://view/SM/do_App/page1.ui", 
		data:"", 
		animationType:"slide_l2r", 
		keyboardMode:"hidden", 
		scriptType:"", 
		statusBarState:"transparent", 
		statusBarFgColor:"", 
		statusBarBgColor:"99961CFF", 
		id:"app_page1"}, 
		function(data, e) {
		deviceone.print("打开文件1");
	}); 
	
});

ui("do_Button_1").on("touch",function(data){
	/***
	 * openPage	弹出新的页面	异步方法
	 *  
	 *  data	String		否	
	 *  animationType	String		否	不设置时，默认取openPge动画所对应配套的关闭动画，例如openPage中是从左至右滑出，则配套关闭为从右至左。
	 *  winphone8不支持该动画效果，android和ios支持。 目前支持以下几种：
								'slide_l2r': 从左至右滑出
								'slide_r2l': 从右至左滑出
								'slide_b2t': 从底至上滑出
								'slide_t2b': 从上至底滑出
								'push_l2r': 从左至右推出
								'push_r2l': 从右至左推出
								'push_b2t': 从底至上推出
								'push_t2b': 从上至底推出
								'fade' : 淡入淡出
								'page_curl' : 上翻页
								'page_uncurl' : 下翻页
								'cube' :立体翻转
	 *  layer	Number	1	否	表示连续关闭多个page的次数，缺省是1，设置为任何小于1的数字都表示1表示只关闭当前页面。如果这个值大于1，则只有一次动画效果，result事件只会触发一次，中间关闭的页面不会有动画也不会触发result事件 * 
	 */
	 	
	 
		app.closePage({
			data:"", 
			animationType:"", 
			layer:""},
			function(data, e) {
			
		});
		
	});

