<?php 

class User
{
    public $username;
    public $password;
    public $email;
    public $code;
    public $search;

    public function __construct()
    {
        if (isset($_POST['yourname'])) {
            $this->username = $_POST['yourname'];
        }
        if(isset($_POST['yourpwd'])) {
            $this->password = $_POST['yourpwd'];
        }
        if(isset($_POST['postbox'])) {
            $this->email = $_POST['postbox'];
        }
        if (isset($_POST['code'])) {
            $this->code = $_POST['code'];
        }
        if (isset($_POST['yoursearch'])) {
            $this->search = $_POST['yoursearch'];
        }
    }
    public function isRightCode()
    {
        return $_SESSION['authcode'] == $this->code;
    }
    public function md5Password()
    {
        $salt = "tianwanggaidihu";
        $this->password = md5(md5($this->password).$salt);
        return $this->password;
    }

}
