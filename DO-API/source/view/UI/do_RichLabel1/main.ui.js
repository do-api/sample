/**
 * related to main.ui
 * 
 * @Author : child
 * @Timestamp : 2016-12-28
 */
var global = sm("do_Global");
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");

/***************************/
//定义RichLabel对象
var target_1 = ui("do_RichLabel1_1");

//定义显示的文字
var TEXT = "开源、免费、可持续发展DeviceOne团队郑重承诺："+
"\r\n1：所有DeviceOne相关源码会逐步开放，最终将全部开源。" +
"\r\n2：开发者的基础服务将永久免费，我们只对增值服务部分 收费 。" +
"\r\n3：DeviceOne产品的发展目标是：让原生开发者更专注技术、让应用开发者更专注业务，让软件开发产业更加高效！"


//定义span规则，第一条是按DeviceOne字符串匹配（strMatch）并支持点击（allowTouch），第二条是同时按cc字符串匹配，并取从15位开始到18位结束的字符，并不支持点击；两个规则同时定义时取并集
var s1 = [{"strMatch": "DeviceOne","spanStyle":"{\"fontColor\":\"FF3030FF\",\"fontStyle\":\"bold\"}","allowTouch": true,"tag": "自定义数据111"},
          {"strMatch": "免费","substring": "15,18","spanStyle":"{\"fontColor\":\"184682FF\",\"fontStyle\":\"bold\"}","allowTouch": false,"tag": "自定义数据222"}];

//修改text属性，修改显示文字
target_1.text = TEXT;

//修改span属性，设置设置区域内显示富文本字体样式
target_1.span = s1;

//maxWidth、maxHeight、maxLines、textAlign属性为设计器属性，只能通过属性列表修改

/***************************/
target_1.on("touch",function(data,e){
	ui("do_Label_1").text = "匹配内容点击事件返回值： " + JSON.stringify(data);
});
