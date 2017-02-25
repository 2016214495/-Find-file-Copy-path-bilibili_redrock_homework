
<!--<!DOCTYPE html>-->
<?php
session_start();
if (empty($_SESSION['adminName'])) {
    echo "<script>alert('请先登录！');</script>";
    echo "<script>window.location='../admin/login.html'</script>;";
}
spl_autoload_register(function($class_name) {
    include "..".DIRECTORY_SEPARATOR."php".DIRECTORY_SEPARATOR."class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});
$db = new Db();
$pdo = $db->connectDb();
$sql = "SELECT uid, username, utime, email
        FROM bilibili_user";
$rows = $db->selectDb($sql, $pdo);
?>


<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <title>后台管理</title>
    <style type="text/css">
        tr,td,th{
            width: 10%;
            text-align: center;
        }
    </style>
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
        <table>
            <thead>
            <tr>
                <th>用户ID</th>
                <th>用户名</th>
                <th>注册时间</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach($rows as $row):?>
                <tr>
                    <td>
                        <input type="checkbox" id="<?php echo $row['uid']?>">
                        <label id="uid" for="<?php echo $row['uid']?>"><?php echo $row['uid']?></label>
                    </td>
                    <td><?php echo $row['username']?></td>
                    <td><?php echo $row['utime']?></td>
                    <td><?php echo $row['email']?></td>
                    <td>
                        <input type="button" value="修改" class="button" id="<?php echo $row['uid']?>" onclick="edituser(<?php echo $row['uid']?>)">
                        <input class="button" type="button" value="删除" onclick="deleteuser(<?php echo $row['uid']?>)">
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
<script type="text/javascript" src="js/edit.js"></script>
</body>
</html>