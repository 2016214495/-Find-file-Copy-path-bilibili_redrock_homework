var si;
document.querySelector("#click").addEventListener("click",danmu);
function danmu() {
    clearInterval(si);
    var text = document.querySelector("#send_inp");
    var play_a = document.querySelector(".play_a");
    var textStyle = "<font id=\"textStyle\">"+text.value+"</font>";
    mathHeight = Math.round(Math.random()*play_a.offsetHeight)+"px";
    var textLeft = play_a.offsetWidth+"px";
    play_a.innerHTML = textStyle;
    var textStyleObj = document.querySelector("#textStyle");
    textStyleObj.style.left = textLeft;
    textStyleObj.style.top = mathHeight;
    var x = getComputedStyle(textStyleObj).left;
    /*si = setInterval("xunhuan("+x+")",100);*/
}
function xunhuan(left) {
    var textStyleObj = document.querySelector("#textStyle");
    textStyleObj.style.left = left;
   var x = getComputedStyle(textStyleObj).left;
    if (x<textStyleObj.style.width) {
        document.querySelector("#play_a").innerHTML = "";
        clearInterval(si);
    }
    else {
        x-=18;
    }
    textStyleObj.style.left = x + "px";
}