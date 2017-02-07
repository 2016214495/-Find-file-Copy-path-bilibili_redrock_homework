document.querySelector("#log_login").addEventListener("click",clicker);
function clicker() {
    var $yourname = document.querySelector("#yourname").value;
    var $yourpwd = document.querySelector("#yourpwd").value;
    if ($yourname == "" || $yourname == null) {
        document.querySelector("#log_username_ts").style.color = "red";
        document.querySelector("#log_username_ts").innerHTML = "请输入用户名" ;
    }
    if ($yourpwd == "" ||yourpwd == null) {
        document.querySelector("#log_pwd_ts").style.color = "red";
        document.querySelector("#log_pwd_ts").innerHTML = "请输入密码";
    }
    if ($yourname != "" || $yourpwd != "" || $yourname != null || $yourpwd != null) {
        ajax({
            method: 'POST',
            url: '../php/signin.php',
            data: {
                yourname: $yourname,
                yourpwd: $yourpwd,
            },
            success: function(responseText) {
                if (responseText == "fail") {
                    document.querySelector("#log_pwd_ts").style.color = "red";
                    document.querySelector("#log_pwd_ts").innerHTML = "用户名或密码错误";
                }
            }
        })
    }
}