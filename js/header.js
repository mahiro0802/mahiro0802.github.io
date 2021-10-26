function load_action(){
    console.log(this.responseText);
    var jsss = JSON.parse(this.responseText);

    for(i=0;i<jsss.site.length;i++){
        //console.log(jsss.length);
		console.log(jsss.site[i].name);
	}
}
function json_load(){
    var req = new XMLHttpRequest();
    req.addEventListener("load",load_action);
    req.open("GET","./js/header.json");
    req.send();
    console.log(req.responseText);
}
window.onload = function(){
    json_load();

}