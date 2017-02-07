<?php
if (!isset($_SESSION)) {
    session_start();
}

include("db_connect.class.php");
use Myproject\BasicClass\Db as Dbconn;
include("user.class.php");
use Myproject\BasicClass\User as Us;
 
$user = new Us();
$db = new Dbconn();
$username = addslashes($user->username);
$password = $user->md5Password();

if ($user->isRightCode() && !$_SESSION['nameexists']) {
    $pdo = $db->connectDb();
    $sql ='INSERT INTO bilibili_user (username,pwd,email) VALUES("'.$username.'","'.$password.'","'.$user->email.'")';
    $isInsert = $db->insertDb($sql, $pdo);
    if ($isInsert) {
        echo 'sucess';
    }
} else {
    echo 'mistake code';
}



?>