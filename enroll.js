var xmlhttp = window.XMLHttpRequest ? new?XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xmlhttp.open("POST","signup.php",true);
xmlhttp.onreadystatechange = function ()
{
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
        }
        else
        {
            alert("AJAX服务器返回错误！");
        }
    }
}
xmlhttp.send("usename="+yourname+"&pwd="+yourpwd);

/*function check() {
    var useName = document.querySelector('#username');
    if (userName.trim（） === ""||userName == null) {
        document.querySelector('#rig-nc').style.color = "red";
        document.querySelector('#rig-nc').innerHTML = "请设置昵称";
    }
    else {
        ajax("signup.php" + userName, function (resText) {
            if(resText == "forbid") {
                document.querySelector('#rig-nc').style.color = "red";
                document.querySelector('#rig-nc').innerHTML = "用户名含有非法词语";
            }
            else if(resText == "already have") {
                document.querySelector('#rig-nc').style.color = "red";
                document.querySelector('#rig-nc').innerHTML = "用户名已被使用";
            }
            else {
                document.querySelector('#rig-nc').style.color = "green";
                document.querySelector('#rig-nc').innerHTML = "可以使用";
            }
        })
    }
}*/