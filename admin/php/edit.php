<?php
if (!isset($_SESSION)) {
    session_start();
}
spl_autoload_register(function($class_name) {
    include "..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."php".DIRECTORY_SEPARATOR."class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});
if (empty($_SESSION['adminName'])) {
    echo "<script>alert('请先登录！');</script>";
    echo "<script>window.location='../admin/login.html'</script>;";
}
if ($_REQUEST['target'] == "video") {
    $vid = $_REQUEST['vid'];
    $vname = $_POST['vname'];
    $uid = $_POST['uid'];

    $db = new Db();
    $pdo = $db->connectDb();
    $sql = "UPDATE bilibili_video SET vname = '{$vname}',uid = '{$uid}' WHERE vid = '{$vid}'";
    $iscompleted = $db->updateDb($sql, $pdo);
    if ($iscompleted) {
        echo "插入成功！";
        echo "<script>window.location='../video.php';</script>";
    } else {
        echo "插入失败！";
    }
} elseif ($_REQUEST['target'] == "comment") {
    $mmid = $_REQUEST['mmid'];
    $comment = $_POST['comment'];

    $db = new Db();
    $pdo = $db->connectDb();
    $sql = "UPDATE bilibili_in_mark SET word = '{$comment}'WHERE mmid = '{$mmid}'";
    $iscompleted = $db->updateDb($sql, $pdo);
    if ($iscompleted) {
        echo "插入成功！";
        echo "<script>window.location='../comment.php';</script>";
    } else {
        echo "插入失败！";
    }
} elseif ($_REQUEST['target'] == "user") {
    $uid = $_REQUEST['uid'];
    $username = $_POST['username'];
    $email = $_POST['email'];

    $db = new Db();
    $pdo = $db->connectDb();
    $sql = "UPDATE bilibili_user SET username = '{$username}', email = '{$email}'  WHERE uid = '{$uid}'";
    $iscompleted = $db->updateDb($sql, $pdo);
    if ($iscompleted) {
        echo "插入成功！";
        echo "<script>window.location='../user.php';</script>";
    } else {
        echo "插入失败！";
    }
} else {
    echo "ghost";
}