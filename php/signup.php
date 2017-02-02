<?php
// session_start();
echo 'asdasd';
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
        // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = $pdo->prepare("SELECT * FROM bilibili_user WHERE username=:username");
        $result->bindparam(":username",$username);
        $result->execute();
        $data = $result->fetch(PDO::FETCH_ASSOC);
            if(!empty($data))
            {
                echo 'already exists';
            }
            else
            {
                $sql ='INSERT INTO bilibili_user (username,pwd,email) VALUES("'.$username.'","'.$password.'","'.$email.'")';
                $res2 = $pdo->exec($sql);
                if($res2 == 1)
                {
                    echo 'sucess';
                }
                // else
                // {
                //     print_r($pdo->errorInfo());
                // }
            }
        
    }
    catch (PDOException $e) 
    {
        echo "数据库错误：".$e->getMessage();
    }


?>