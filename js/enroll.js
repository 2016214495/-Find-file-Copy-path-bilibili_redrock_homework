document.querySelector("#myBtn").addEventListener("click",check);
function check() {
    var yourname = document.querySelector("#yourname").value;
    if (yourname == "" || yourname == null) {
        document.querySelector("#rig-nc").style.color = "red";
        document.querySelector("#rig-nc").innerHTML = "请设置昵称";
    }
    else {
        ajax({
            method:'POST',
            url:'../php/signup.php',
            data:{
                yourname:'yourname',
            },
            success:function(responseText) {
                if (responseText == "forbid") {
                    document.querySelector("#rig-nc").style.color = "red";
                    document.querySelector("#rig-nc").innerHTML = "用户名含有非法词语";
                }
                else if (responseText == "already have") {
                    document.querySelector("#rig-nc").style.color = "red";
                    document.querySelector("#rig-nc").innerHTML = "用户名已被使用";
                }
                else {
                    document.querySelector("#rig-nc").style.color = "green";
                    document.querySelector("#rig-nc").innerHTML = "可以使用";
                }
            }
        })
    }
    var yourpwd = document.querySelector("#yourpwd").value;
    if (yourpwd == "" || yourpwd == null) {
        document.querySelector("#rig-mm").style.color = "red";
        document.querySelector("#rig-mm").innerHTML = "请设置密码";
    }
    else {
        if (yourpwd.length < 6 || yourpwd.length > 20) {
            document.querySelector("#rig-mm").style.color = "red";
            document.querySelector("#rig-mm").innerHTML = "密码长度不符合要求";
        }
        else {
            ajax({
                method:'POST',
                url:'../php/signup.php',
                data:{
                    yourpwd:'yourpwd'
                },
                success:function(password) {
                    document.querySelector("#rig-mm").style.color = "green";
                    document.querySelector("#rig-mm").innerHTML = "可以使用";
                }
            })
        }
    }
    var tpwd = document.querySelector("#tpwd").value;
    if (tpwd == "" || tpwd == null) {
        document.querySelector("#rig-qrmm").style.color = "red";
        document.querySelector("#rig-qrmm").innerHTML = "请输入密码";
    }
    else {
        if (tpwd != yourpwd) {
            document.querySelector("#rig-qrmm").style.color = "red";
            document.querySelector("#rig-qrmm").innerHTML = "两次输入密码不一致";
        }
        else {
            document.querySelector("#rig-qrmm").style.color = "green";
            document.querySelector("#rig-qrmm").innerHTML = "正确";
        }
    }
    var postbox = document.querySelector("#postbox").value;
    if (postbox == ''||postbox == null) {
        document.querySelector('#rig-yx').style.color = "red";
        document.querySelector('#rig-yx').innerHTML = "请设置邮箱";
    }
    else {
        for (var i = 0; i < postbox.length; i++) {
            var x = "@" ;
            if (postbox[i] == x ) {
                ajax({
                    method:'POST',
                    url:'../php/signup.php',
                    data:{
                        postbox:'postbox'
                    },
                    success:function(postbox) {
                        document.querySelector('#rig-yx').style.color = "green";
                        document.querySelector('#rig-yx').innerHTML = "记住邮箱";
                    }
                })
                break;
            }
            else {
                document.querySelector('#rig-yx').style.color = "red";
                document.querySelector('#rig-yx').innerHTML = "请输入正确的邮箱地址";
            }
        }
    }
}