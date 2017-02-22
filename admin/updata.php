
<!--<!DOCTYPE html>-->
<?php
session_start();
    if (empty($_SESSION['adminName'])) {
        echo "<script>alert('请先登录！');</script>";
        echo "<script>window.location='../admin/login.html'</script>;";
    }

?>


<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <title>后台管理</title>
</head>
<body>
    <div class="wamp">
        <div class="header">
            <ul id="ul">
                <li class="li"><a href="updata.php">视频上传</a></li>
                <li class="li"><a href="video.php">视频管理</a></li>
                <li class="li"><a href="comment.php">评论管理</a></li>
                <li class="li"><a href="user.php">用户信息管理</a></li>
            </ul>
        </div>
        <div class="content">
            <form action="php/adminload.php" method="post" enctype="multipart/form-data">

                请选择视频：<input type="file" name="video">
                <br>
                请选择封面：<input type="file" name="img">
                <br>
                请输入名称：<input type="input" name="filename">
                <br>
                <input id="button" type="submit" name="submit" value="上传">
            </form>
        </div>
    </div>
</body>
</html>