/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-03
 */

var app=sm("do_App");
var page=sm("do_Page");

page.on("back", function(data, e) {
	app.closePage();
})

//touch	点击触发
var target=ui("do_LinearLayout_1");
target.on("touch",function(data){
	
});

/*****************************************************/

function reslutshow(data){
	ui("")
}

