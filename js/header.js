function load(){
    console.log(this.responseText);
    document.getElementsByTagName("nav")[0].innerHTML = this.responseText;
}
window.onload = function() {
    var req = new XMLHttpRequest();
    req.addEventListener("load",load);
    req.open("GET","html/header.html");
    req.send();
}