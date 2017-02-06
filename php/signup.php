<?php
// namespace Myproject\BasicClass;
if (!isset($_SESSION)) {
    session_start();
}

include("db_connect.class.php");
use Myproject\BasicClass\Db as Dbconn;

$username = $_POST['yourname'];
$password = $_POST['yourpwd'];
$email = $_POST['postbox'];
$code = $_POST['code'];

$username = addslashes($_POST['yourname']);
$salt = "tianwanggaidihu";
$password = md5(md5($_POST['yourpwd']).$salt);

if ($_SESSION['authcode'] == $code) {
    try {
        $db = new Dbconn();
        $pdo = $db->connectDb();
        $sql ='INSERT INTO bilibili_user (username,pwd,email) VALUES("'.$username.'","'.$password.'","'.$email.'")';
        $isInsert = $db->insertDb($sql, $pdo);
        if ($isInsert == 1) {
            echo 'sucess';
        }
    } catch (PDOException $e) {
        echo "数据库错误：".$e->getMessage();
    }
} else {
    echo 'mistake code'.$_SESSION['authcode'];
}



?>