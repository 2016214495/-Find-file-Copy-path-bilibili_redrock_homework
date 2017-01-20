<?php
$username = $_POST['username'];
$password = $_POST['pwd'];


if(!empty($_POST['username']) && !empty($_POST['pwd']))
{
    $username = addslashes($_POST['username']);
    $salt = "xiaojidunmogu";
    $password = md5(md5($_POST['pwd']).$salt);
    try 
    {
        $config = require_once 'config.php';
        $pdo = new PDO('mysql:host=localhost;dbname=bium','root','');
        // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $res = $pdo->prepare("select * from tencent where username=:username");
        $res->bindparam(":username",$username);
        $res->execute();
        // $res = $pdo->query("select * from tencent where username='{$username}'");
        $data = $res->fetch(PDO::FETCH_ASSOC);
        // foreach($date as $war)
        // {
        //     echo $war;
        // }

            if(!empty($data))
            {
                echo 0;
            }
            else
            {
                $sql ='INSERT INTO tencent (username,password) VALUES("'.$username.'","'.$password.'")';
                $res2 = $pdo->exec($sql);
                if($res2 == 1)
                {
                    echo 1;
                }
                // else
                // {
                //     print_r($pdo->errorInfo());
                // }
            }
        
    // }
    // catch (PDOException $e) 
    // {
    //     echo "数据库错误：{$e->getMessage()}";
    // }
}
else
{
    echo 2;   //"表单未填完整"
}


?>