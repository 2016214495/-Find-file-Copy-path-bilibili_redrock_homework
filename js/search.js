function color() {
    var tipslia = document.querySelectorAll(".tipslia");
    for (var i = 0; i < tipslia.length; i++) {
        tipslia[i].addEventListener("mouseover",function() {
            this.style.color = "#f489ad";
        })
        tipslia[i].addEventListener("mouseout",function() {
            this.style.color = "#00a1d6";
        })
    }
}
color();
function read() {
    var listli = document.querySelectorAll(".list_li");
    var text = document.querySelector(".text").value;
    var x;
    for (var i = 0; i < listli.length; i++) {
        listli[i].addEventListener("mouseover",function() {
            this.style.backgroundColor = "#eee";
        })
        listli[i].addEventListener("mouseout",function() {
            this.style.backgroundColor = "#fff";
        })
    }
}
read();
document.querySelector(".sea_b_but").addEventListener("click",function() {
    var $keyword = document.querySelector(".sea_b_content").value;
    if ($keyword != "" || $keyword != null) {
        /*ajax({
            methed:'GET',
            url:'../php/search.php',
            async:true,
            data:{sea_b_content:$keyword},
            success:function() {
                window.location.href = "../html/searchresult.html";
            }
        })*/
        window.location.href = "../html/searchresult.html?yoursearch=" + "$keywor";
    }
})