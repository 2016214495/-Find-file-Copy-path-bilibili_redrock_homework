<?php
session_start();
spl_autoload_register(function($class_name) {
    include "..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."php".DIRECTORY_SEPARATOR."class".DIRECTORY_SEPARATOR.$class_name.".class.php";
});
$username = $_POST['username'];
$password = $_POST['pwd'];
$code = $_POST['code'];

if ($_SESSION['authcode'] == $code) {

        $pdo = new PDO("mysql:host=127.0.0.1;dbname=bilibili", "root", "");
        $sql = "SELECT password FROM bilibili_admin WHERE username = '{$username}'";
        $res = $pdo->prepare($sql);
        $res->execute();
        $row = $res->fetch();

        if ($row['password'] == $password) {
            $_SESSION['adminName'] = $username;
            echo "<script>alert('登陆成功！')</script>";
            echo "<script>window.location='../updata.php';</script>";
        } else {
            echo "<script>alert('用户名或密码错误')</script>";
            echo "<script>window.location='../login.html';</script>";
        }

} else {
    echo "<script>alert('验证码错误！')</script>";
    echo "<script>window.location='../login.html';</script>";
}