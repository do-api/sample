/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-02-16
 */
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var global = sm("do_Global");

/***
 * 组件商店：http://store.deviceone.net  
 * 组件名称：动画
 * 组件介绍：所有UI组件缩放，移动，透明度变化，旋转都支持动画效果。这个类就是用来定义动画所有属性值的集合，作为UI的animate方法的参数
 * 支持平台及最低版本 :
 * IOS 7    Android 4.0    Windows Phone 10    Windows 10   
 **/
/***
 * 组件方法
 * 
 * alpha	透明度动画	同步方法
 * rotate	旋转动画	同步方法
 * scale	缩放动画	同步方法
 * transfer	位移动画	同步方法 
 */

var target1=mm("do_Animation","_a","app");

target1.fillAfter=0;//属性名称 :	是否保持动画的最后一帧在View上面	Bool, 默认值 :	说明 :	是否保持动画的最后一帧在View上面
// alpha	透明度动画	同步方法

/**
 * data	Node		是	这是一个JSON node节点，包含多个参数，参数集合如下：
 * 		{ 
 * 			'delay':'动画延迟时间（毫秒）',
 * 			'duration':'动画过渡时间（毫秒）',
 * 			'curve':'动画曲线类型四种情况：1.'EaseInOut'动画启动时候慢，中间快，结束的时候慢、2.'EaseIn'动画启动的时候慢、3.'EaseOut'动画结束的时候慢、4.'Linear'动画速度不变',
 * 			'repeatCount':'动画重复次数，默认不重复，为-1时无限重复'
 * 			'autoReverse':'是否自动动画反转',
 * 			'alphaFrom':'起始透明值，取值0-1，0表示透明',
 * 			'alphaTo':'结束透明值，取值0-1，0表示透明'
 * 		} 
 * id	String		否	每次调用这个函数都会创建一个新的动画属性集合，如果动画id一样，则会覆盖旧的动画属性值
 * */
target1.alpha({
	delay:1000,
	duration:2000,
	curve:4,
	repeatCount:2,
	autoReverse:true,
	alphaFrom:1,
	alphaTo:0
}, "_a1");

ui("do_Button_1").on("touch",function(body){
	
	ui("do_ImageView_1").animate(target1, function(data, e) {
		deviceone.print("动画执行结束");
	})
});

var target2=mm("do_Animation","_r","app");

target2.fillAfter=0;//属性名称 :	是否保持动画的最后一帧在View上面	Bool, 默认值 :	说明 :	是否保持动画的最后一帧在View上面
// rotate	旋转动画 	同步方法
/**
 * data	Node		是	这是一个JSON node节点的参数集合，包含以下参数：
						{ 
							'delay':'动画延迟时间（毫秒）',
							'duration':'动画过渡时间（毫秒）',
							'curve':'动画曲线类型四种情况：1.'EaseInOut'动画启动时候慢，中间快，结束的时候慢、2.'EaseIn'动画启动的时候慢、3.'EaseOut'动画结束的时候慢、4.'Linear'动画速度不变',
							'repeatCount':'动画重复次数，默认不重复，为-1时无限重复'
							'autoReverse':'是否自动动画反转',
							'fromDegree':'起始旋转角度，取值是0-360',
							'toDegree':'结束旋转角度，取值是0-360',
							'pivotX':'旋转中心点x坐标',
							'pivotY':'旋转中心点y坐标'，其中pivotX、pivotY这两个值的取值范围为0-1，如果不设置表示旋转中心点是组件的右上角，设置成0.5选装中心点即为组件的中心点，设置成1旋转中心点是组件的右下角
						}
	id	String		否	每次调用这个函数都会创建一个新的动画属性集合，如果动画id一样，则会覆盖旧的动画属性值
 * **/
target2.rotate({ 
	delay:1000,
	duration:2000,
	curve:4,
	repeatCount:2,
	autoReverse:true,
	fromDegree:0,
	fromDegree:60,
	pivotX:50,
	pivotY:50 
	
}, "_r1");

ui("do_Button_2").on("touch",function(body){
	
	ui("do_ImageView_1").animate(target2, function(data, e) {
		deviceone.print("动画执行结束");
	})
});



var target3=mm("do_Animation","_s","app");

target3.fillAfter=0;//属性名称 :	是否保持动画的最后一帧在View上面	Bool, 默认值 :	说明 :	是否保持动画的最后一帧在View上面
// scale	缩放动画	同步方法
/**
 * data	Node		是	这是一个JSON node节点的参数集合，包含以下参数：
						{ 
							'delay':'动画延迟时间（毫秒）',
							'duration':'动画过渡时间（毫秒）',
							'curve':'动画曲线类型四种情况：1.'EaseInOut'动画启动时候慢，中间快，结束的时候慢、2.'EaseIn'动画启动的时候慢、3.'EaseOut'动画结束的时候慢、4.'Linear'动画速度不变',
							'repeatCount':'动画重复次数，默认不重复，为-1时无限重复'
							'autoReverse':'是否自动动画反转',
							'scaleFromX':'起始x的伸缩比例',
							'scaleFromY':'起始y的伸缩比例',
							'scaleToX':'结束x的伸缩比例',
							'scaleToY':'结束y的伸缩比例',
							'pivotX':'缩放起点x坐标',
							'pivotY':'缩放起点y坐标'
						}

 * 	id	String		否	每次调用这个函数都会创建一个新的动画属性集合，如果动画id一样，则会覆盖旧的动画属性值
 * 
 * 
 * **/
target3.scale({
	delay:1000,
	duration:2000,
	curve:4,
	repeatCount:2,
	autoReverse:true,
	scaleFromX:0,
	scaleFromY:60,
	scaleToX:60,
	scaleToY:120,
	pivotX:50,
	pivotY:50 
}, "_s1");

ui("do_Button_3").on("touch",function(body){
	
	ui("do_ImageView_1").animate(target3, function(data, e) {
		deviceone.print("动画执行结束");
	})
});

var target4=mm("do_Animation","_t","app");

target4.fillAfter=0;//属性名称 :	是否保持动画的最后一帧在View上面	Bool, 默认值 :	说明 :	是否保持动画的最后一帧在View上面
// transfer	位移动画	同步方法

/**
 * 
 * data	Node		是	这是一个JSON node节点的参数集合，包含以下参数：
					{ 
						'delay':'动画延迟时间（毫秒）',
						'duration':'动画过渡时间（毫秒）',
						'curve':'动画曲线类型四种情况：1.'EaseInOut'动画启动时候慢，中间快，结束的时候慢、2.'EaseIn'动画启动的时候慢、3.'EaseOut'动画结束的时候慢、4.'Linear'动画速度不变',
						'repeatCount':'动画重复次数，默认不重复，为-1时无限重复'
						'autoReverse':'是否自动动画反转',
						'fromX':'起始x坐标',
						'fromY':'起始y坐标'，
						'toX':'结束x坐标',
						'toY':'结束y坐标'
					}，其中fromx,fromy,tox,toy都是相对于当前组件的位置的值，而不是绝对值，比如100，表示当前坐标值加100，而不是绝对坐标100
  id	String		否	每次调用这个函数都会创建一个新的动画属性集合，如果动画id一样，则会覆盖旧的动画属性值
 * 
 * **/
target4.transfer({
	delay:1000,
	duration:2000,
	curve:4,
	repeatCount:2,
	autoReverse:true,
	fromX:0,
	fromY:60,
	toX:60,
	toY:120 
}, "_t1");

ui("do_Button_4").on("touch",function(body){
	
	ui("do_ImageView_1").animate(target4, function(data, e) {
		deviceone.print("动画执行结束");
	})
});

 
//重置
ui("do_Button_5").on("touch",function(body){
	ui("do_ImageView_1").setMapping({
		"x":"180",
		"y":"270", 
	})
});
