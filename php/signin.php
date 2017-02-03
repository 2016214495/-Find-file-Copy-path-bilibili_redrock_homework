<?php

$username = $_POST['yourname'];
$passward = $_POST['yourpwd'];
$code = $_POST['code'];

if($_SESSION['authcode']==$code){
    try 
    {
        $config = require_once 'config.php';
        $pdo = new PDO($config['host'],$config['user'],$config['pass']);
        $res = $pdo->prepare('SELECT pwd FROM bilibili_user WHERE email = :email OR username = :username');
        $res->bindParam(":email",$username);
        $res->bindParam(":username",$username);
        $res->execute();
        $date = $res->fetch(PDO::FETCH_ASSOC);
        if($passward==$data['pwd']){
            echo "success";
        }else{
            echo "fail";
        }
    }
    catch (PDOException $e) 
    {
        echo "数据库错误：".$e->getMessage();
    }
}else{
    echo 'mistake code';
}