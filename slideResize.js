$(document).ready(function(){
    $(window).resize(function(){
        let slider = $(".slider").width();
        myFunction(slider)
    })
    function myFunction(result){
        let toggleSlider = $('.toggle_slider').children();
        let slide = toggleSlider.children();
let slideShow = function (event){
    $(".news_content_blocks").css({'left':event.data.point});
    for (let i=0; i<slide.length; i++){
    slide[i].classList.remove("radio_button_active");
    slide[i].classList.add("radio_button");}
    $(this).addClass("radio_button_active");  
       
}

$(slide[0]).click({point:"0px"},slideShow)
$(slide[1]).click({point:-result},slideShow)
$(slide[2]).click({point:-result*2},slideShow)
}
 });