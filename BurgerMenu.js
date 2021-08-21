$(document).ready(function(){


$(window).resize(function(){
    if ($(window).width()<760){
        let menuHeightresize = $(document).height()
        $('.menu').height(menuHeightresize)}
        else {
            $('.menu').height('')
        }
})
$('.burger_button').click(function(){
    $('.menu').addClass('menu_active')
    $('.menu').removeClass('menu_disable')
})
$('.close').click(function(){
    $('.menu').addClass('menu_disable')
    $('.menu').removeClass('menu_active')
})
})
$('body').ready(function(){
    if ($(window).width()<760){
    let menuHeight = $(document).outerHeight(true);
    $('.menu').height(menuHeight)}})
