<?php

$username = $_POST['yourname'];
$username = addslashes($username);


$config = require_once('config.php');
$pdo = new PDO($config['host'],$config['user'],$config['pass']);
$result = $pdo->prepare("SELECT username FROM bilibili_user where username = :username");
$result->bindParam(":uaername",$username);
$isexists = $result->execute();
if($isexists){
    echo 'already exists';
}else{
    echo 'can be used';
}


?>