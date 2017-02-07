<?php
if (!isset($_SESSION)) {
    session_start();
}
$username = $_POST['yourname'];
$password = $_POST['yourpwd'];
$salt = "tianwanggaidihu";
$password = md5(md5($password).$salt);
// $code = $_POST['code'];

// if($_SESSION['authcode']==$code){
    try 
    {
        $config = require_once 'config.php';
        $pdo = new PDO($config['host'],$config['user'],$config['pass']);
        $res = $pdo->prepare('SELECT pwd FROM bilibili_user WHERE email = :email OR username = :username');
        $res->bindParam(":email",$username);
        $res->bindParam(":username",$username);
        $res->execute();
        $data = $res->fetch(PDO::FETCH_ASSOC);
        if (empty($data)) {
            echo "not find";
        } else {
            if ($password == $data['pwd']) {
                echo "success";
            } else {
                echo "fail";
            }
        }
    }
    catch (PDOException $e) 
    {
        echo "数据库错误：".$e->getMessage();
    }
// }else{
//     echo 'mistake code';
// }