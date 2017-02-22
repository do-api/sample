/**
 * related to index.ui
 * 
 * @Author : deviceone
 * @Timestamp : 2016-06-18
 */

var page = sm("do_Page");
var chatList = ui("chatList");
var chatListData = mm("do_ListData");

 chatListData.addOne({
	template : 0,
	text : "test0"
});
chatListData.addOne({
	template : 1,
	text : "aaaaaaaaaaaaaaaaaa"
});

 chatListData.addOne({
 template : 0,
 text : "你好啊"
 });
chatListData.addOne({
	template : 0,
	text : "啊束带结发束带结发开始的；卡萨丁；饭卡；老师的看法；奥斯卡地方；拉开始的；饭卡上；都快疯了；是快递费拉开始的；浪费卡了多少；分开了；独守空房；拉的时刻；发了卡死了到付款；啊水电开发卢卡斯；对了饭卡；冯；上岛咖啡；撒快点；反馈；啦收到了；独守空房； "
});
//chatListData.addOne({
//	template : 1,
//	borderview_itmes:{"rightView":{"mytext":"111111111111"}}
//});
//chatListData.addOne({
//	template : 1,
//	borderview_itmes:{"rightView":{"mytext":"22222222222222"}}
//});
//chatListData.addOne({
//	template : 1,
//	borderview_itmes:{"rightView":{"mytext":"333333333333333333"}}
//});
//chatListData.addOne({
//	template : 1,
//	borderview_itmes:{"rightView":{"mytext":"44444444444444"}}
//});

chatList.bindItems(chatListData);
//chatList.scrollToPosition(chatListData.getCount(), false)

page.on("sendMsg", function(data, e) {
	var content = data;
	deviceone.print(JSON.stringify(data),typeof(data))
	chatListData.addOne({
		template : 1,
		borderview_itmes:{"rightView":{"mytext":content}}
	});
	if (content.charAt(0) == 1) {
		chatListData.addOne({
			template : 0,
			text : "欢迎1111111111111111！"
		});
	}
	chatList.refreshItems();
	chatList.scrollToPosition(chatListData.getCount(), false)
	chatList.rebound();
})

//page.on("focusIn", function(data, e) {
//	deviceone.print("focusIn===========")
//	chatList.scrollToPosition(chatListData.getCount(), false)
//})

chatList.on("sizeChanged", function(data, e) {
	deviceone.print("sizeChanged =========== " + JSON.stringify(data))
	chatList.scrollToPosition(chatListData.getCount(), false)
})


chatList.on("scroll", function(data, e) {
// page.hideKeyboard();
})
