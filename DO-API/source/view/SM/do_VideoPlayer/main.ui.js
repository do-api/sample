/**
 * related to main.ui
 * 
 * @Author : zxhuizhi@126.com
 * @Timestamp : 2017-07-06
 */
var device = sm("do_Device")
var nf = sm("do_Notification");
var do_VideoPlayer = sm("do_VideoPlayer")

var text = ui("do_TextField_1")
var time = text.text
var playlocal = ui("playlocal")
var playol = ui("playol")
var info = device.getInfo()

deviceone.print(JSON.stringify(info),"信息")


playlocal.on("touch",function(){
	if(info.OS=="android")
		{
		if(time!=null){
			do_VideoPlayer.play({path:"initdata://do_VideoPlayer/2.mp4",point:time})
		}
		else{
			do_VideoPlayer.play({path:"initdata://do_VideoPlayer/2.mp4"})
		}
		}
	else{
		nf.alert("只有android支持本组件")
	}
	
})

playol.on("touch",function(){
	if(info.OS=="android")
	{
	if(time!=null){
		do_VideoPlayer.play({path:"https://deviceone.blob.core.chinacloudapi.cn/developer/a/20160629/video/39d8acd5f39273b9bc44e8718f130cae/39d8acecbebb9d992730334ba78bb12e.mp4",point:time})
	}
	else{
		do_VideoPlayer.play({path:"https://deviceone.blob.core.chinacloudapi.cn/developer/a/20160629/video/39d8acd5f39273b9bc44e8718f130cae/39d8acecbebb9d992730334ba78bb12e.mp4"})
	}
	}
else{
	nf.alert("只有android支持本组件")
}
})