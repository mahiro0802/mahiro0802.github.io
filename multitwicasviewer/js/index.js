function submittttt(){
    var textarea = document.getElementById("textarea").value;
    var ta = textarea.split("\n");
    var ja = ta.join('","');
    var json = "[\"" + ja + "\"]";

    window.location.href = "viewer.html?user=" + json;
}