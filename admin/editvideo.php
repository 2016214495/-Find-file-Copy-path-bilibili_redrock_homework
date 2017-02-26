<?php
if (!isset($_SESSION)) {
    session_start();
}
if (empty($_SESSION['adminName'])) {
    echo "<script>alert('请先登录！');</script>";
    echo "<script>window.location='../admin/login.html'</script>;";
}
$vid = $_GET['vid'];
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
        <form action="php/edit.php?vid=<?php echo $vid?>&target=video" method="post">
            修改视频名称：<input type="text" name="vname">
            <br>
            修改视频主人：<input type="text" name="uid">
            <input class="button" type="submit" name="submit" value="上传">
        </form>
    </div>
</div>
</body>
</html>
