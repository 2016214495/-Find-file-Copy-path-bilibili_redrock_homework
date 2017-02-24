document.querySelector("#top_body_li").addEventListener("mouseover",mover);
document.querySelector("#top_body_li_a").addEventListener("mouseout",mout);
function mover() {
    document.querySelector("#top_body_li_a").style.display = "block";
}
function mout() {
    document.querySelector("#top_body_li_a").style.display = "none";
}
function read() {
    var second = document.querySelectorAll(".second_ul_li");
    for (var i = 0; i < second.length; i++) {
        second[i].addEventListener("mouseover",function() {
            this.style.backgroundColor = "#eee";
        })
        second[i].addEventListener("mouseout",function() {
            this.style.backgroundColor = "#fff";
        })
    }
}
read();



/*window.onload = function() {
    var prev = document.querySelector("#prev");
    var next = document.querySelector("#next");
    var imgs = document.querySelector("#list");
    var span = document.querySelectorAll("#buttons span");
    var count = 0;
    var timer;
    var interval = 3000;
    var animated = false;
    function move(offset) {
        animated = true;
        var time = 1000;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(imgs.style.left) + offset;
        var amimate = function() {
            if ((speed > 0 && parseInt(imgs.style.left) < left) || (speed < 0 && parseInt(imgs.style.left) > left)) {
                imgs.style.left = parseInt(imgs.style.left) + speed + 'px';
                setTimeout(amimate,inteval);
            }
            else{
                imgs.style.left = left + 'px';
                if (parseInt(left) > -440) {
                    imgs.style.left = -1760 + "px";
                }
                if (parseInt(left) < -2200) {
                    imgs.style.left = -440 + "px";
                }
                animated = false;
            }
        }
        amimate();
    }
    function showspan() {
        for (var i = 0; i < span.length; i++) {
            if (span[i].className == 'on') {
                span[i].className = '';
            }
        }
        span[count].className = 'on';
    }
    prev.onclick = function() {
        if (animated) {
            return;
        }
        move(440);
        if (count == 0) {
            count = 4;
        }
        else{
            count--;
        }
        showspan();
    }
    next.onclick = function() {
        if (animated) {
            return;
        }
        move(-440);
        if (count == 4) {
            count = 0;
        }
        else{
            count++;
        }
        showspan();
    }
    for (var i = 0; i < span.length; i++) {
        span[i].id = i;
        span[i].onclick = function() {
            if (this.className == 'on') {
                return;
            }
            index = this.id;
            var offset = -440*(index-count);
            move(offset);
            count = index;
            showspan();
        }
    }
    function play() {
        timer = setInterval(function() {
            next.onclick();
        },interval);
    }
    function stop() {
        clearInterval(timer);
    }
    carousel.mouseover = stop;
    carousel.mouseout = play;
    play();
}*/


window.onload = function() {
    var prev = document.querySelector("#prev");
    var next = document.querySelector("#next");
    var imgs = document.querySelector("#list");
    var span = document.querySelectorAll("#buttons span");
    var count = 0;
    var timer;
    var interval = 3000;
    var animated = false;
    function move(offset) {
        animated = true;
        var time = 1000;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = getComputedStyle(imgs).left + offset;
        var amimate = function() {
            if ((speed > 0 && getComputedStyle(imgs).left < left) || (speed < 0 && getComputedStyle(imgs).left > left)) {
                imgs.style.left = getComputedStyle(imgs).left + speed + 'px';
                setTimeout(amimate,inteval);
            }
            else{
                imgs.style.left = left + 'px';
                if (parseInt(left) >= -440) {
                    imgs.style.left = -1760 + "px";
                }
                if (parseInt(left) <= -2200) {
                    imgs.style.left = -440 + "px";
                }
                animated = false;
            }
        }
        amimate();
    }
    function showspan() {
        for (var i = 0; i < span.length; i++) {
            if (span[i].className == 'on') {
                span[i].className = '';
            }
        }
        span[count].className = 'on';
    }
    prev.onclick = function() {
        if (animated) {
            return;
        }
        move(440);
        if (count == 0) {
            count = 4;
        }
        else{
            count--;
        }
        showspan();
    }
    next.onclick = function() {
        if (animated) {
            return;
        }
        move(-440);
        if (count == 4) {
            count = 0;
        }
        else{
            count++;
        }
        showspan();
    }
    for (var i = 0; i < span.length; i++) {
        span[i].id = i;
        span[i].onclick = function() {
            if (this.className == 'on') {
                return;
            }
            index = this.id;
            var offset = -440*(index-count);
            move(offset);
            count = index;
            showspan();
        }
    }
    function play() {
        timer = setInterval(function() {
            next.onclick();
        },interval);
    }
    function stop() {
        clearInterval(timer);
    }
    carousel.mouseover = stop;
    carousel.mouseout = play;
    play();
}