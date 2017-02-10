document.querySelector("#top_body_li").addEventListener("mouseover",mover);
document.querySelector("#top_body_li_a").addEventListener("mouseout",mout);
function mover() {
    document.querySelector("#top_body_li_a").style.display = "block";
}
function mout() {
    document.querySelector("#top_body_li_a").style.display = "none";
}
/*document.querySelector("#donghua").addEventListener("mouseover",function() {
    document.querySelector("#second_ul_dh").style.display = "block";
})
document.querySelector(".second_ul").addEventListener("mouseout",function() {
    document.querySelector("#second_ul_dh").style.display = "none";
})*/