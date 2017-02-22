<?php
spl_autoload_register(function($class_name) {
    include "class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});

$user = new User();
$db = new Db();

$searcharray = explode(' ',$user->search);

$pdo = $db->connectDb();
$result = Array();
foreach ($searcharray as $key => $value) {
    $sql = 'SELECT username, vtime, vname,vimg,video
            FROM bilibili_video,bilibili_user
            WHERE bilibili_user.uid = bilibili_video.uid
             AND vname LIKE \'%'.$value.'%\'
             LIMIT 10';
    $data = $db->selectDb($sql, $pdo);
    $result = array_merge_recursive($result, $data);
}
$res = array_unique($result);
echo json_encode($res);
