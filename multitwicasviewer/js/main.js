function user_set(){
    var url = new URL(window.location.href);
    var par = new URLSearchParams(url.search);
    if(par.has("user")){
        console.log(par.get("user"));
        var js = JSON.parse(decodeURI(par.get("user")));

        for(i=0;js.length >i;i++){
            console.log(js[i]);
            user_add(js[i],i);
        }
        siiize();
    }
    else{
        window.location.href = "index.html";
    }
}
function user_add(user,count){
    var user_class = document.createElement("div");
    user_class.setAttribute("class","user");
    var user_info_class = document.createElement("div");
    user_info_class.setAttribute("class","user_info");
    var name_class = document.createElement("div");
    name_class.setAttribute("class","name");
    var user_follow_class = document.createElement("a");
    user_follow_class.setAttribute("href","javascript:user_follow('" + user + "');");
    //user_follow_class.setAttribute("onclick","user_follow('" + user +"');");
    var player_class = document.createElement("div");
    player_class.setAttribute("class","player");
    var iframe_element = document.createElement("iframe")
    iframe_element.setAttribute("src","https://ssl.twitcasting.tv/" + user + "/embeddedplayer/live?auto_play=true&default_mute=true");
    iframe_element.setAttribute("frameborder","0");
    iframe_element.setAttribute("scrolling","no");

    document.getElementById("main").appendChild(user_class);
    document.getElementsByClassName("user")[count].appendChild(user_info_class);
    document.getElementsByClassName("user_info")[count].appendChild(name_class);
    document.getElementsByClassName("name")[count].appendChild(user_follow_class).textContent = user;
    document.getElementsByClassName("user")[count].appendChild(player_class);
    document.getElementsByClassName("player")[count].appendChild(iframe_element);
    
    
}
function target_blank(){
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
function user_follow(user){
    window.open("https://twitcasting.tv/userinspector.php?user_id=" + user,"フォローする",'width=300, height=500');
}


window.onload = function(){
    user_set();
    //target_blank();
    //siiize();
}