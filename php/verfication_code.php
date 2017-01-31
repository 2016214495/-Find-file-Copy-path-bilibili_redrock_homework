<?php
    session_start();
    $image = imagecreatetruecolor(100, 50);
    $backgroundcolor = imagecolorallocate($image, 255, 255, 255);//#fff
    imagefill($image, 0, 0, $backgroundcolor);

    $captch_code = '';
    for($i=0; $i<4; $i++){
        $fontsize = 10;
        $fontcolor = imagecolorallocate($image, rand(0, 160), rand(0, 160), rand(0,160));
        $data = "abcdefghijkmnpqrstuvwxy3456789";
        $fontcontent = substr($data, rand(0, strlen($data)-1),1);

        $y = rand(5, 30);
        $x = $i * 25 +rand(0, 10);
        imagestring($image, $fontsize, $x, $y, $fontcontent, $fontcolor);
        $captch_code .= $fontcontent;
    }
    for ($i=0; $i<400; $i++){
        $pointcolor = imagecolorallocate($image, rand(100,255), rand(100,255), rand(100,255));
        imagesetpixel($image, rand(1, 99), rand(1, 49), $pointcolor);
    }
    for ($i=0; $i<10; $i++){
        $linecolor = imagecolorallocate($image, rand(100,255), rand(100,255), rand(100,255));
        imageline($image, rand(1, 99), rand(1, 49), rand(1, 99), rand(1, 49), $linecolor);
    }

    $_SESSION['authcode'] = $captch_code;

    header('content-type: image/png');
    imagepng($image);

    imagedestroy($image);

?>


