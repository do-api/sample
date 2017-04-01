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

//定义地图对象
var target_1 = ui("do_BaiduMapView_1");

//定义页面根节点
//var $ = ui("$");
//$.add({id:"poiSearch", path:"source://view/UI/do_BaiduMapView/cell/poiSearch.ui"});
//$.add({id:"routePlanSearch", path:"source://view/UI/do_BaiduMapView/cell/routePlanSearch.ui"});

////在页面初始化时，把搜索服务和路线检索页面加入根节点
//page.on("loaded",function(){
//	//先暂时隐藏
//	ui("poiSearch").hide();
////	ui("routePlanSearch").hide();
//})
/***************************/
//修改mapType为satellite，切换为卫星地图
ui("do_Button_3").on("touch",function(){
	target_1.mapType = "satellite";
	nf.toast("卫星地图");
})
//修改mapType为standard，切换为标准地图
ui("do_Button_4").on("touch",function(){
	target_1.mapType = "standard";
	nf.toast("标准地图");
})

//修改zoomLevel属性，放大地图
var i = 3;
ui("do_Button_6").on("touch",function(){
	target_1.zoomLevel = i;
	i = i+1;
	if(i>19){
		i = 3;
		nf.toast("已达上限");
	}
})

//修改zoomLevel属性，缩小地图
ui("do_Button_5").on("touch",function(){
	target_1.zoomLevel = i;
	i = i-1;
	if(i<3){
		i = 3;
		nf.toast("已达下限");
	}
})

//设置地图中心点为天安门
ui("do_Button_7").on("touch",function(){
	target_1.setCenter({latitude:"39.915174", longitude:"116.403901"});
	nf.toast("设置中心点成功");
})

//获取两点间实际距离
ui("do_Button_8").on("touch",function(){
	var data = target_1.getDistance({startPoint:"39.915174,116.403901", endPoint:"39.911241,116.399905"});
	nf.alert(data+" 米 ","从天安门人民大会堂的距离");
})

//使用地图搜索服务
ui("do_Button_9").on("touch",function(){
	//根据检索类型type参数不同，param参数对应不同内容
	//当type = 0时，param为{city:''}；
	//当type = 1时，param 为{leftBottom:'39.915174,116.403901(纬度,经度)',rightTop:'39.915174,116.403901(纬度,经度)'}表示矩形区域，左下角和右上角的经纬度坐标点；
	//当type = 2时，param为{location:'39.915174,116.403901(纬度,经度)',radius:''}，其中location为检索的中心点经纬度，radius为周边检索半径，单位为米
	//本例中设置按城市搜索，关键字为医院，同时设置分页显示第一页，一页显示5条数据
	nf.toast(1);
	target_1.poiSearch({type:0, keyword:"医院", param:{city:'北京'}, pageIndex:0, pageSize:5}, function(data, e) {
		nf.alert(data,"搜索北京的医院结果：");
	})
})

//发起路线检索
ui("do_Button_10").on("touch",function(){
	target_1.routePlanSearch({type:"Bus", startCityName:"北京", endCityName:"北京", startCitySite:"", endCitySite:""}, function(data, e) {
		nf.alert(data,"搜索北京的医院结果：");
	})
})


/***************************/
//touchMap事件
target_1.on("touchMap",function(data,e){
	var Type = typeof(data); 
	nf.toast("touchMap 事件 ");
})

//touchMarker事件
target_1.on("touchMarker",function(data,e){
	var Type = typeof(data);
	nf.toast("touchMarker 事件 ");
})

//regionChange事件
target_1.on("regionChange",function(data,e){
	var Type = typeof(data);
	nf.toast("regionChange 事件 " + i);
})


/***************************/
