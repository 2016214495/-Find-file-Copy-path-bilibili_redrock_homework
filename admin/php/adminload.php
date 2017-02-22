<?php
if (!isset($_SESSION)) {
    session_start();
}
spl_autoload_register(function($class_name) {
    include "..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."php".DIRECTORY_SEPARATOR."class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});
 $db = new Db();

$vname = $_POST['filename'];
$videoname = $_FILES['video']['name'];
$videotype = $_FILES['video']['type'];
$videopath = $_FILES['video']['tmp_name'];
$videoerror = $_FILES['video']['error'];
$imgname = $_FILES['img']['name'];
$imgtype = $_FILES['img']['type'];
$imgpath = $_FILES['img']['tmp_name'];
$imgerror = $_FILES['img']['error'];

$vname = htmlspecialchars($vname);
$vname = addslashes($vname);

if (!$videoerror && !$imgerror) {
        $videonewname = md5((string)time() . $videoname);
        $imgnewname = md5((string)time() . $imgname);
        move_uploaded_file($videopath, ".." . DIRECTORY_SEPARATOR . ".." . DIRECTORY_SEPARATOR . "video" . DIRECTORY_SEPARATOR . $videonewname.".mp4");
        move_uploaded_file($imgpath, ".." . DIRECTORY_SEPARATOR . ".." . DIRECTORY_SEPARATOR . "video" . DIRECTORY_SEPARATOR . $imgnewname.".jpg");
        $pdo = $db->connectDb();

        $sql2 = "SELECT uid FROM bilibili_user WHERE username = '{$_SESSION['adminName']}'";
        $data = $db->selectDb($sql2, $pdo);
        $uid = $data[0]['uid'];

        $sql = "INSERT INTO bilibili_video (uid, video, vname, vimg) VALUES ('{$uid}','{$videonewname}','{$vname}','{$imgnewname}')";
        $iscompleted = $db->insertDb($sql, $pdo);
    if ($iscompleted) {
        echo "<script>alert('上传成功！');</script>";
        echo "<script>window.location='../updata.php'</script>";
    }else{
        echo "changhd";
    }
} else {
    echo "上传不成功";
    switch ($videoerror) {
        case 1:
            echo "video上传文件大于upload_max_filesize 10M";break;
        case 2:
            echo "video超过表单MAX_FILE_SIZE限制大小";break;
        case 3:
            echo "video文件部分上传";break;
        case 4:
            echo "没有选择video文件";break;
        case 6:
            echo "没有找到临时目录";break;
        case 7:
        case 8:
            echo "系统错误";break;
        default:
            break;
    }
}

