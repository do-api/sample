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
tf.setFocus(false);

var rootView = ui("$");
var page = sm("do_Page");

tf.on("focusIn", function(data, e) {
	page.fire("focusIn")
})

sendBtn.on("touch", function(data, e) { // 发送消息
	var content = tf.text;
	page.fire("sendMsg", content)
	tf.text = "";
})

addBtn.on("touch", function(data, e) { // 添加表情view
//	rootView.add("faceView", "source://view/face/index.ui", btn);
	var address = rootView.add("faceView", "source://view/face/index.ui", 0, 120)
	if(address != null){
		rootView.height = rootView.height + 300;
		rootView.redraw();
		page.fire("redraw")
	}
})