<?php
spl_autoload_register(function($class_name) {
    include "class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});

$user = new User();
$db = new Db();

$pdo = $db->connectDb();
$sql = "SELECT uid FROM bilibili_user WHERE username = '{$user->username}'";
$res = $db->selectDb($sql, $pdo);
$uid = $res['uid'];


if ($flag == 1) {
    $sql = "INSERT INTO bilibili_mark(uid, contain, vid)
            VALUES ('{$uid}','{$contain}','{$vid}')";
    $isinsert = $db->insertDb($sql, $pdo);
    if($isinsert) {
        echo "registration completed";
    }
} elseif ($flag == 0) {
    $sql = "INSERT INTO bilibili_in_mark(mid, word)
            VALUES '{$mid}','{$word}'";
    $sql2 = "UPDATE bilibili_mind
            SET is_status=1
            WHERE mid={$mid}";
    $isinsert = $db->insertDb($sql, $pdo);
    $isupdate = $db->updateDb($sql2, $pdo);
} else {
    echo "你flag立的不对";
}