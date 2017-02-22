/**
 * related to bottomView.ui
 * 
 * @Author : deviceone
 * @Timestamp : 2016-06-23
 */
var tf = ui("content");
var sendBtn = ui("sendBtn");
var addBtn = ui("addBtn");
var page = sm("do_Page");
var line = ui("do_ALayout_1");
tf.setFocus(false);

var rootView = ui("$");
var page = sm("do_Page");

tf.on("focusIn", function(data, e) {
	deviceone.print("bottomView focusIn===")
	page.fire("focusIn")
})

sendBtn.on("touch", function(data, e) { // 发送消息
	var content = tf.text;
	page.fire("sendMsg", content)
	tf.text = "";
})

addBtn.on("touch", function(data, e) { // 添加表情view
	var address = rootView.add("faceView", "source://view/UI/do_BorderView/one/face/index.ui", line);
	if(address != null){
		deviceone.print(address);
		page.fire("redraw");
	}
})