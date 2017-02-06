<?php
namespace Myproject\BasicClass;

class Db
{
    private $host;
    private $user;
    private $pass;

    public function __construct(
        $host = 'mysql:host=localhost;dbname=bilibili',
        $user = 'root',
        $pass = ''
    ) {
        $this->host = $host;
        $this->user = $user;
        $this->pass = $pass;
    }
    public function connectDb()
    {
        $pdo = new \PDO($this->host, $this->user, $this->pass);
        return $pdo;
    }
    public function selectDb($sql, $pdo)
    {
        $res = $pdo->prepare($sql);
        $res = $pdo->execute();
        return $res->fetchAll();
    }
    public function updateDb($sql, $pdo)
    {
        ;
    }
    public function insertDb($sql, $pdo)
    {
        return $pdo->exec($sql);
    }
}
