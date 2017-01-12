/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2017-1-12
 */ 
 var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

/**************/

//定义ProgressBar1对象
var target_1 = ui("do_ProgressBar1_1");
var target_2 = ui("do_ProgressBar1_2");

//修改defaultImage属性和changeImage属性，同时给ProgressBar修改样式
target_1.defaultImage = "source://view/UI/do_ProgressBar1/image/1.png";
target_1.changeImage = "source://view/UI/do_ProgressBar1/image/2.png";


//pointNum属性为设计器属性，只能通过设计器属性列表修改

//修改pointColors属性，给do_ProgressBar_2的四个小圆点单独设置颜色
target_2.pointColors = "FF0000FF,FFFF00FF,0080FFFF,00FF00FF";

