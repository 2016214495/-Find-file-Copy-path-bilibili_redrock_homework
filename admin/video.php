
<!--<!DOCTYPE html>-->
<?php
session_start();
if (empty($_SESSION['adminName'])) {
    echo "<script>alert('请先登录！');</script>";
    echo "<script>window.location='../admin/login.html'</script>;";
}
include "php/page.func.php";
spl_autoload_register(function($class_name) {
    include "..".DIRECTORY_SEPARATOR."php".DIRECTORY_SEPARATOR."class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});
$db = new Db();
$pdo = $db->connectDb();

$sql = "SELECT COUNT(vid) FROM bilibili_video";
$data = $db->selectDb($sql, $pdo);
$totalcount = $data[0]['COUNT(vid)'];

if ($_GET['page']>=1){
    $page = $_GET['page'];
} else {
    $page = 1;
};
$totalpage = $totalcount / 5;
$totalpage = ceil($totalpage);
$startpage = ($page - 1) * 5;
$sql = "SELECT vid, vname, uid
        FROM bilibili_video
        limit {$startpage},5";
$rows = $db->selectDb($sql, $pdo);
?>


<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <style type="text/css">
        tr,td,th{
            width: 20%;
            text-align: center;
        }
    </style>
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
        <table>
            <thead>
                <tr>
                    <th>视频编号</th>
                    <th>视频名称</th>
                    <th>视频主人</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
            <?php foreach($rows as $row):?>
                <tr>
                    <td><input type="checkbox" id="<?php echo $row['vid']?>"><label id="vid" for="<?php echo $row['vid']?>"><?php echo $row['vid']?></label></td>
                    <td><?php echo $row['vname']?></td>
                    <td><?php echo $row['uid']?></td>
                    <td><input type="button" value="修改" class="button" name="<?php echo $row['vid']?>" onclick="editvideo(<?php echo $row['vid']?>)"><input class="button" type="button" value="删除" onclick="deletevideo(<?php echo $row['vid']?>)"></td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
        <?php echo showPage($page, $totalpage);?>
    </div>
</div>
<script type="text/javascript" src="js/video.js"></script>
</body>
</html>