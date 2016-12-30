/**
 * related to main1.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2016-12-23
 */
/**
 * related to signUp.ui
 * 
 * @Author : 1173859245
 * @Timestamp : 2016-09-22
 */
// 引入组件库
var do_App = sm("do_App");
var do_Page = sm("do_Page");
var uitools = require("uitools");
var back = ui("back");
uitools.setPageCloseWay(back);
var do_Notification = sm("do_Notification");
var do_ImageView_2 = ui("do_ImageView_2");
var do_Label_coursename = ui("do_Label_coursename");
var keshi = ui("keshi");
var yuanjia = ui("yuanjia");
var menshijia = ui("menshijia");
var do_Button_SignUp = ui("do_Button_SignUp");
var old = ui("zhao_old");
var leibie = ui("course_type");
var do_Label_kcjiejie = ui("do_Label_content");
var do_ImageView_tcheard = ui("do_ImageView_10");
var tc_name = ui("tcname");
var atschool = ui("teacherschool");
var old_tracher = ui("do_Label_countyear");
var teacher_content = ui("teacher_content");
var do_GridView_1 = ui("do_GridView_1");
var gListData = mm("do_ListData");
do_GridView_1.bindItems(gListData);
var dataCache = sm("do_DataCache");
var http = require("http");
var tel;

// 页面装载完成后，开始初始化工作
do_Page.on("loaded", function() {
	// 获得存储的学生信息
	var userinfo = dataCache.loadData("login_result");
	deviceone.print(JSON.stringify(userinfo));
	// 读取当前页面的传入参数
	var params = do_Page.getData();
	keshi.text = params.courseHour;
	yuanjia.text = params.courseDiscount;
	menshijia.text = params.coursePrice;
	old.text = params.courseAge;// 招生年龄
	leibie.text = params.typeName;// 课程类别
	do_ImageView_2.source = (params.courseImg).split("?")[0]
			+ http.qiniuPic.xp720;
	deviceone.print(JSON.stringify(params), "传递过来的数据");
	var url = http.url.courseDetail;
	var _paras = {
		userId : userinfo.userId,
		token : userinfo.token,
		courseId : params.courseId
	}

	http.post(url, _paras, function(data) {
		deviceone.print(JSON.stringify(data), "请求到的数据");
		if (data.result == "000") {
			do_Label_coursename.text = data.content.courseName;
			do_Label_kcjiejie.text = data.content.courseDetail;
			tc_name.text = data.content.teacher.teacherName;
			do_ImageView_tcheard.source = data.content.teacher.teacherHead;
			teacher_content.text = data.content.teacher.teacherResume;

			gListData.addData(data.content.subSchools);
			do_GridView_1.refreshItems();
			// 取第一个分校的地址
			// schoolname.text=data.content.subSchools[0].subSchoolName;
			// Address.text=data.content.subSchools[0].subSchoolAddress;
			// tel=data.content.subSchools[0].subSchoolTel;
		}

	}, function(Error) {

	}, null)

	// 立即报名
	do_Button_SignUp.on("touch", function() {
		do_App.openPage({
			source : "source://view/school/nowSignUp.ui",
			animationType : "slide_r2l",
			statusBarState : "transparent",
			keyboardMode : "hidden",
			data : JSON.stringify({
				courseId : params.courseId,
				courseName : do_Label_coursename.text,
				coursePrice : params.coursePrice,
				courseHour : params.courseHour
			})
		});

	});
});

do_GridView_1.on("touch", function(index) {
 
});
