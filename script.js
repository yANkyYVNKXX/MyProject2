
$(document).ready(function(){
    let toggleSlider = $('.toggle_slider').children();
    let slide = toggleSlider.children();
    let slider = $(".slider").width();
    
    $(".slide").width(slider)
    $(window).resize(function(){
    var widthSlider = $(".slider").width();
    $(".slide").width(widthSlider)
    })
let slideShow = function (event){
    $(".news_content_blocks").css({'left':event.data.point});
    for (let i=0; i<slide.length; i++){
    slide[i].classList.remove("radio_button_active");
    slide[i].classList.add("radio_button");}
    $(this).addClass("radio_button_active");  
       
}

$(slide[0]).click({point:"0px"},slideShow)
$(slide[1]).click({point:-slider},slideShow)
$(slide[2]).click({point:-slider*2},slideShow)
 });

