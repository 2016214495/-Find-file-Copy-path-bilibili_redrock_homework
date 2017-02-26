<?php
include("db_connect.class.php");
use Myproject\BasicClass\Db as Dbconn;
include("user.class.php");
use Myproject\BasicClass\User as Us;

$user = new Us();
$db = new Dbconn();

$pdo = $db->connectDb();

//实例化分词插件核心类
$so = scws_new();
//设置分词时所用编码
$so->set_charset('utf-8');
//设置分词所用词典(此处使用utf8的词典)
$so->set_dict('/usr/local/scws/etc/dict.utf8.xdb');
//设置分词所用规则
$so->set_rule('/usr/local/scws/etc/rules.utf8.ini ');
//分词前去掉标点符号
$so->set_ignore(true);
//是否复式分割，如“中国人”返回“中国＋人＋中国人”三个词。
$so->set_multi(true);
//设定将文字自动以二字分词法聚合
$so->set_duality(true);
//要进行分词的语句
$so->send_text($user->search);

$result = Array();

while ($tmp = $so->get_result())
{
    foreach ($tmp as $array) {
        $sql = 'SELECT username, vtime, vname, video
        FROM bilibili_video,bilibili_user
        WHERE bilibili_user.uid = bilibili_video.uid
            AND vname LIKE \'%'.$array['word'].'%\'
            LIMIT 10';
        $data = $db->selectDb($sql, $pdo);
        $result = array_merge_recursive($result, $data);
    }
}
$so->close();
$res = array_unique($result);

echo json_encode($res);
