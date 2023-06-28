function random_push(name,id,role){
    //.agentのdivを作成
    var agent_div = document.createElement("div");
    agent_div.setAttribute("class","agent");
    //.agent-image-boxのdivを作成
    var img_box = document.createElement("div");
    img_box.setAttribute("class","agent-image-box");
    //.agent-imageのimgを作成
    var img = document.createElement("img");
    img.setAttribute("class","agent-image");
    img.setAttribute("src","assets/images/valorant/" + id + ".png");
    //.agent-nameのdivを作成
    var agent_name = document.createElement("div");
    agent_name.setAttribute("class","agent-name text-center");
    agent_name.textContent = name;
    //.agent-roleのdivを作成
    var agent_role = document.createElement("div");
    agent_role.setAttribute("class","agent-role text-center");
    agent_role.textContent = role;


    img_box.appendChild(img);

    agent_div.appendChild(img_box);
    agent_div.appendChild(agent_name);
    agent_div.appendChild(agent_role);

    //#outputを取得
    var output = document.getElementById("output");
    //#outputに.agentを追加
    output.appendChild(agent_div);
}

async function nameserch(randomIndexes){
    var jsondata = document.getElementById("json").textContent;
    var data = JSON.parse(jsondata);
    var agents = [];
    for(var i = 0; i < randomIndexes.length; i++){
        console.log(data["agents"][randomIndexes[i]]["name"])
        console.log(randomIndexes[i]);
        agents.push(data["agents"][randomIndexes[i]]["name"]);
        random_push(data["agents"][randomIndexes[i]]["name"],data["agents"][randomIndexes[i]]["id"],data["agents"][randomIndexes[i]]["role"]);
        await sleep(0.1);
    }
    for(var i = 0; i < agents.length; i++){
        console.log(agents[i]);
    }
    var split_agent = agents.join("%0a");
    var tweetbutton = document.getElementById("tweetlink");
    tweetbutton.setAttribute("href","https://twitter.com/share?url=https://mahiro0802.github.io/valorant_random_pick.html&text=ランダムピックの結果は…%0a%0a" + split_agent + "%0a%0aでした！&hashtags=Valorantランダムピック,Valorant");
}

async function sleep(second){
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}

function random_pic(){
    //numberboxの数を取得
    var num = document.getElementById("numberbox").value;

    //すでにある要素を削除
    var output = document.getElementById("output");
    output.textContent = "";

    //checkboxの取得
    var checkboxes = document.getElementsByName("agent");
    //配列宣言
    var checkedItems = [];
    //チェックが入っている項目を配列に追加
    for (var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            checkedItems.push(i);
        }
    }

    //ランダム抽出
    //チェックが選択した数以上入っているか確認
    if (checkedItems.length > num) {
        //ランダムの結果を宣言
        var randomIndexes = [];
        while(randomIndexes.length < num){
            //チェックが入っている項目からランダムに抽出
            var randomIndex = Math.floor(Math.random() * checkedItems.length);
            //もしランダム結果の配列に存在していない場合
            if(!randomIndexes.includes(checkedItems[randomIndex])){
                //ランダム結果の配列に追加
                randomIndexes.push(checkedItems[randomIndex]);
            }
        }
        nameserch(randomIndexes);
    } else {
        alert('なぞのエラーだ！');
    }
}


function add_checkbox(){
    var jsondata = document.getElementById("json").textContent;
    var data = JSON.parse(jsondata);
    data["agents"].forEach(function(item) {
        var label = document.createElement("label");
        label.setAttribute("class","check-label");

        var checkbox = document.createElement("input");
        checkbox.setAttribute("class","check");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("name","agent");
        checkbox.setAttribute("value",item.id);
        checkbox.setAttribute("checked",true);
        label.appendChild(checkbox);

        var text = document.createElement("p");
        text.textContent = item.name;

        label.appendChild(text);

        var check_div = document.getElementById("checkbox");
        check_div.appendChild(label);
    });
}

async function get_json() {
    await fetch("assets/json/valorant.json")
        .then(function(response) {
            if(response.ok){
                return response.text();
            }
        })
        .then(function(data) {
            document.getElementById("json").textContent = data;
            console.log("process_comp")
        });
}

document.addEventListener("DOMContentLoaded", async function(){
    await get_json();
    await add_checkbox();
});