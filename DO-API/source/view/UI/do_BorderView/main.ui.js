/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-03
 */

var app = sm("do_App");
var page = sm("do_Page");

/**
 * 当前组件属性
 * 当前组件的属性都是UI文件的引入
 * 
 * 更多文件说明参考组件商店api：http://store.deviceone.net  搜索do_BorderView即可
 * 
 * **/

//bottomView	居下子视图

//centerFillParent	居中子视图填充父容器

//centerView	居中子视图

//items	BorderView显示内容

//leftView	居左子视图

//rightView	居右子视图

//topView	居上子视图

/**
 * 当前组件方法
 * 
 * **/
//getView	获取子组件地址	同步方法


ui("do_Button_1").on("touch",function(data){
//	app.openPage("source://view/UI/do_BorderView/one/image/aaa.jpg");
	app.openPage("source://view/UI/do_BorderView/one/index.ui");
});
