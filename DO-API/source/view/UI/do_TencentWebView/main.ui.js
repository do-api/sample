/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-03-07
 */

var app=sm("do_App");
var page=sm("do_Page");

page.on("back",function(data){
	app.closePage();
});

var  target=ui("do_TencentWebView_1");
/**
 * 属性
 * 
 * */

//bounces	反弹效果  ---只支持iOS平台 下拉有反弹效果
target.bounces=true;
//cacheType	缓存类型
target.cacheType=""
//enabled	控制WebView是否可以获取焦点
target.enabled=true;


//isShowLoadingProgress	是否显示进度条   ---这个是样式设置,用户加载等待问题，为true的时候用户体验比较好
target.isShowLoadingProgress=true;

//url	网页地址   这个是地址

//userAgent	浏览器标识    

//zoom	手势缩放  ---这个属性比较常


/**
 * 方法
 * */

//eval	执行JavaScript函数	异步方法

//loadString	加载html字符串	异步方法

//back	回退	同步方法

//canBack	是否可后退	同步方法

//canForward	是否可继续前进	同步方法

//forward	前进	同步方法

//getContentSize	获取加载页面内容尺寸	同步方法

//reload	重新加载	同步方法

//setCookie	设置cookie	同步方法

//setDefaultEncodingURL	设置默认转码	同步方法

//setLoadingProgressColor	设置顶部进度条颜色	同步方法

//stop	停止刷新	同步方法

/**
 * 事件 
 * 
 * */
 
//failed	加载错误事件
//loaded	加载结束事件
//start	开始加载
target.on("start", function(data, e) {
	target
})