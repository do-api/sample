/**
 * @Author : 18668972585
 * @Timestamp : 2017-02-10
 */
var nf = sm("do_Notification");
var btn_hello = ui("btn_hello");

var do_ImageBrowserView_1 = ui("do_ImageBrowserView_1");
var images = [];
for (var index = 0; index < 10; index++) {
	var image = {
			source: "http://pic36.nipic.com/20131128/11748057_141932278338_2.jpg",
			//init: "source://image/default/news_image_default.png"
	};
	images[index] = image;
}

do_ImageBrowserView_1.bindItems(images);

