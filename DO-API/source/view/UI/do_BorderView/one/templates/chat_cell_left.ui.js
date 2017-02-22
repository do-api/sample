/**
 * related to chat_cell.ui
 * 
 * @Author : deviceone
 * @Timestamp : 2016-06-18
 */
var rootView = ui("$");
rootView.setMapping({
	"text.text" : "text"
});

rootView.on("dataRefreshed", function(data, e) {
	deviceone.print("dataRefreshed left")
})