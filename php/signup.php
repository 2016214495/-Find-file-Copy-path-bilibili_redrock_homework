<?php
// session_start();

$username = $_POST['yourname'];
$password = $_POST['yourpwd'];
$email = $_POST['postbox'];
$code = $_POST['code'];

$illegalchar = '~!@#$%^&*()_+{}|:"<>?`-=[]\;\',./';

$username = addslashes($_POST['yourname']);
$salt = "tianwanggaidihu";
$password = md5(md5($_POST['yourpwd']).$salt);
try 
{
    $config = require_once 'config.php';
    $pdo = new PDO($config['host'],$config['user'],$config['pass']);
    $sql ='INSERT INTO bilibili_user (username,pwd,email) VALUES("'.$username.'","'.$password.'","'.$email.'")';
    $res = $pdo->exec($sql);
    // if (!$res) {
    //     echo "\nPDO::errorInfo():\n";
    //     print_r($pdo->errorInfo());
    // }
    if($res == 1)
    {
        echo 'sucess';
    }
    else{
        
    }
}
catch (PDOException $e) 
{
    echo "数据库错误：".$e->getMessage();
}


?>