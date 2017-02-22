/**
 * related to chat_cell.ui
 * 
 * @Author : deviceone
 * @Timestamp : 2016-06-18
 */
var rootView = ui("root");
var borderView = ui("do_BorderView_1");
// ////////////////////////////////////////////////////////////
// var borderChildView = borderView.getView("right")
// var rightView = ui(borderChildView);
//
// rootView.setMapping({
// "root.tag" : "text"
// });
//
// rootView.on("dataRefreshed", function(data, e) {
// deviceone.print("dataRefreshed right")
// rightView.fire(borderChildView, rootView.tag);
// })
// ////////////////////////////////////////////////////

rootView.setMapping({
	// "root.tag" : "text"
	"do_BorderView_1.items" : "borderview_itmes"
});
