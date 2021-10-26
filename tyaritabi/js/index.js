function load(){
    for(i=0;document.getElementsByTagName("a").length>i;i++){
        document.getElementsByTagName("a")[i].setAttribute("target","_blank");
    }
}
function siiize(){
    console.log(document.getElementById("range").value);
    for(i=0;document.getElementsByClassName("user").length>i;i++){
        document.getElementsByTagName("iframe")[i].style.width = document.getElementById("range").value + "px";
        var tate = document.getElementById("range").value / 16;
        document.getElementsByTagName("iframe")[i].style.height = tate*9 + "px";
    }
}

window.onload = function(){
    load();
} 