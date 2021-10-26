//サイズの表示
function window_load() {
	var sW,sH,s;
	sW = window.innerWidth;
	sH = window.innerHeight;

	s = sH;
	document.getElementById("bodycss").innerHTML = "<style>#body{height:" + s + "px;}</style>";
}
window_load();

//ウィンドウサイズ変更時に更新
window.onresize = window_load();