/**
 * related to userinfo-form.ui
 * 
 * @Author : and
 * @Timestamp : 2016-04-25
 */
var user = ui("do_TextField_5");
var phone = ui("do_TextField_4");
var sign = ui("do_TextField_6");
var address = ui("do_TextField_7");
var email = ui("do_TextField_8");
var qq = ui("do_TextField_9");
var user_tip = ui("do_Label_6");
var phone_tip = ui("do_Label_5");
var sign_tip = ui("do_Label_7");

var page = sm("do_Page");
var app = sm("do_App");
var nf = sm("do_Notification");  
ui("close").on("touch", function() {
	app.closePage(userdata);
})
page.on("back", function(data) {
	app.closePage(userdata);
}).on("loaded", function() {
	init();
});

var userdata;
function init() {
	userdata = page.getData();
	if (userdata) {
		user.text = userdata.user;
		phone.text = userdata.phone;
		address.text = userdata.address;
		email.text = userdata.email;
		qq.text = userdata.qq;
	}
}

var okbutton = ui("do_ALayout_28");
var form_layout = ui("do_ALayout_5");
form_layout.on("touch", function() {
	// 点击空白处关闭键盘
	page.hideKeyboard();
});
okbutton.on("touch", function() {
	if (!user.text)
		user_tip.visible = true;
	else
		user_tip.visible = false;
	if (!phone.text)
		phone_tip.visible = true;
	else
		phone_tip.visible = false;
	if (!sign.text)
		sign_tip.visible = true;
	else
		sign_tip.visible = false;
	form_layout.redraw();
	if (user_tip.visible || phone_tip.visible || sign_tip.visible) {
		nf.toast("数据不能为空");
	} else {
		if (!userdata)
			userdata = {};
		userdata.user = user.text;
		userdata.phone = phone.text;
		userdata.address = address.text;
		userdata.email = email.text;
		userdata.qq = qq.text;
		nf.toast("保存成功!");
	}
	page.hideKeyboard();
})