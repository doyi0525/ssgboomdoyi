let d_more_btn = document.getElementById("d_more_btn");
let d_head_thing2 = document.getElementById("d_head_thing2");

d_more_btn.addEventListener("click",function(){
    // box.computedStyleMap.height = "100px"
    d_head_thing2.style.display = "block";
})

let d_x_icon =document.getElementById("d_x_icon")
d_x_icon.addEventListener("click",function(){
    // box.computedStyleMap.height = "100px"
    d_head_thing2.style.display = "none";
})