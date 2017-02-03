<?php

$username = $_POST['yourname'];
$username = addslashes($username);

$config = require_once('config.php');
$pdo = new PDO($config['host'],$config['user'],$config['pass']);
$result = $pdo->prepare("SELECT username FROM bilibili_user where username = :username");
$result->bindParam(":username",$username);
$result->execute();
$isexists = $result->fetch(PDO::FETCH_ASSOC);
if(!empty($isexists)) {
    echo 'already exists';
}else{
    echo 'can be used';
}


?>