/*function ajax(opts) {
    var defaults = {
        method:'GET',
        url:'../php/signup.php',
        data:'',
        async: true,
        cache: true,
        contentType:'application/x-www-form-urlencoded',
        success: function () {},
        error: function () {},
    };
    for (var key in opts) {
        defaults[key] = opts[key];
    };
    if (typeof opts ==='object') {
        var str = '';
        for(var key in "usename="+yourname+"&pwd="+yourpwd) {
            str += key + '=' + "usename="+yourname+"&pwd="+yourpwd[key] + '&'
        }
 //       "usename="+yourname+"&pwd="+yourpwd = str.substring(0,str.length - 1);
    };
    defaults.method = defaults.method.toUpperCase();
    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime();
    if (defaults.method === 'GET' && ("usename="+yourname+"&pwd="+yourpwd ||true) ) {
//        ../php/signup.php += '?' + "usename="+yourname+"&pwd="+yourpwd + true;
    };
}
var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xmlhttp.open("POST","../php/signup.php",true);
xmlhttp.onreadystatechange = function ()
{
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
        }
        else
        {
            console.log();
        }
    }
}
xmlhttp.send("usename="+yourname+"&pwd="+yourpwd);*/
document.querySelector('#myBtn').addEventListener("click",function() {
    var username = document.querySelector('#username');
    username = username.value;
    if (username.trim() === ''||username == null) {
       document.querySelector("#rig-nc").style.color = "red";
       document.querySelector("#rig-nc").innerHTML = "请设置昵称"; 
    }
    else {
        if (username == "forbid") {
            document.querySelector('#rig-nc').style.color = "red";
            document.querySelector('#rig-nc').innerHTML = "含有非法词语";
        }
        else if (username == "already have") {
            document.querySelector('#rig-nc').style.color = "red";
            document.querySelector('#rig-nc').innerHTML = "用户名已被使用";
        }
        else {
            document.querySelector('#rig-nc').style.color = "green";
            document.querySelector('#rig-nc').innerHTML = "可以使用";
        }
    }
    var password = document.querySelector('#password');
    password = password.value;
    if (password.length < 6) {
        document.querySelector('#rig-mm').style.color = "red";
        document.querySelector('#rig-mm').innerHTML = "密码小于6位";
    }
    else if (password.length > 20) {
        document.querySelector('rig-mm').style.color = "red";
        document.querySelector('rig-mm').innerHTML = "密码大于20位";
    }
    else {
        if(password.length >= 6 && password.length < 10) {
            document.querySelector('#rig-mm').style.color = "orange";
            document.querySelector('#rig-mm').innerHTML = "密码级别：低";
        }
        else if(password.length >= 10 && password.length < 15) {
            document.querySelector('#rig-mm').style.color = "yellow";
            document.querySelector('#rig-mm').innerHTML = "密码级别：中";
        }
        else {
            document.querySelector('#rig-mm').style.color = "green";
            document.querySelector('#rig-mm').innerHTML = "密码级别：高";
        }
    }
    var postbox = document.querySelector('#postbox');
    postbox = postbox.value;
    if (postbox == ''||postbox == null) {
        document.querySelector('#rig-yx').style.color = "red";
        document.querySelector('#rig-yx').innerHTML = "请设置邮箱";
    }
    else {
        for (var i = 0; i < postbox.length; i++) {
            var x = "@" ;
            if (postbox[i] == x ) {
                document.querySelector('#rig-yx').style.color = "green";
                document.querySelector('#rig-yx').innerHTML = "记住邮箱";
                break;
            }
            else {
                document.querySelector('#rig-yx').style.color = "red";
                document.querySelector('#rig-yx').innerHTML = "请输入正确的邮箱地址";
            }
        }
    }
});