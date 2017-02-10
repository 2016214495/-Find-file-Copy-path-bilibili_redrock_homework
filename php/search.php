<?php
include("db_connect.class.php");
use Myproject\BasicClass\Db as Dbconn;
include("user.class.php");
use Myproject\BasicClass\User as Us;

$user = new Us();
$db = new Dbconn();

$searcharray = explode(' ',$user->search);

$pdo = $db->connectDb();
foreach ($searcharray as $key => $value) {
    $sql = 'SELECT username, vtime, vname
            FROM bilibili_video,bilibili_user
            WHERE bilibili_user.uid = bilibili_video.uid
             AND vname LIKE \'%'.$value.'%\'
             LIMIT 10';
    $data = $db->selectDb($sql, $pdo);
    foreach ($data as $key2 => $value2) {
        echo json_encode($value2);
    }
}


