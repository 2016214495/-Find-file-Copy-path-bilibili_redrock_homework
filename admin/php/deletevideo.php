<?php
session_start();
if (empty($_SESSION['adminName'])) {
    echo "<script>alert('请先登录！');</script>";
    echo "<script>window.location='../admin/login.html'</script>;";
}
spl_autoload_register(function($class_name) {
    include "..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."php".DIRECTORY_SEPARATOR."class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});
$vid = $_GET['vid'];

$db = new Db();
$pdo = $db->connectDb();
$sql = "DELETE FROM bilibili_video WHERE vid = '{$vid}'";
$iscompleted = $db->updateDb($sql, $pdo);
if ($iscompleted) {
    echo "删除成功！";
    echo "<script>window.location='../video.php'</script>";
} else {
    echo "删除失败！";
}