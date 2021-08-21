 $(window).resize(function(){
    $(".news_content_blocks").css({'left':'0px'});
    $("#default").addClass("radio_button_active");
    $("#default").removeClass("radio_button");
    $(".but").removeClass("radio_button_active");
    var width = $(window).width();
    if (width<1200){
    $(".content_block").width(width/4.1);
    }
    else {
        $(".content_block").width('293px')
        $(".red_block").width('349px');
        $(".violet_block").width('349px');
    }
    if (width<1100){
        $(".content_block").width(width/4.2);
        
    }
    if (width<1000){
        $(".content_block").width(width/4.3);
    }
    if (width<960){
        $(".content_block").width(width/4.5);
    }
    if (width<910){
        $(".content_block").width(width/4.6);
    }
    if (width<880){
        $(".content_block").width(width/4.7);
    }
    if (width<850){
        $(".content_block").width(width/4.8);
    }
    if (width<820){
        $(".content_block").width(width/4.9);
    }
    if (width<780){
        $(".content_block").width(width/5);
    }
    if (width<740){
        $(".content_block").width(width/5.1);
    }
    if (width<700){
        $(".content_block").width(width/5.2);
    }
    if (width<660){
        $(".content_block").width(width/5.5);
    }
    if (width<620){
        $(".content_block").width(width/5.7);
    }
    if (width<540){
        $(".content_block").width(width/6.2);
    }
    if (width<460){
        $(".content_block").width(width/6.4);
    }
    if (width<440){
        $(".content_block").width(width/6.6);
    }
    })
    
    $(document).ready(function(){
        var width = $(window).width();
        if (width<1200){
        $(".content_block").width(width/4.1);
        }
        else {
            $(".content_block").width('293px')
            $(".red_block").width('349px');
            $(".violet_block").width('349px');
        }
        if (width<1100){
            $(".content_block").width(width/4.2);
        }
        if (width<1000){
            $(".content_block").width(width/4.3);
        }
        if (width<960){
            $(".content_block").width(width/4.5);
        }
        if (width<910){
            $(".content_block").width(width/4.6);
        }
        if (width<880){
            $(".content_block").width(width/4.7);
        }
        if (width<850){
            $(".content_block").width(width/4.8);
        }
        if (width<820){
            $(".content_block").width(width/4.9);
        }
        if (width<780){
            $(".content_block").width(width/5);
        }
        if (width<740){
            $(".content_block").width(width/5.1);
        }
        if (width<700){
            $(".content_block").width(width/5.2);
        }
        if (width<660){
            $(".content_block").width(width/5.5);
        }
        if (width<620){
            $(".content_block").width(width/5.7);
        }
        if (width<540){
            $(".content_block").width(width/6.2);
        }
        if (width<460){
            $(".content_block").width(width/6.4);
        }
        if (width<440){
            $(".content_block").width(width/6.6);
        }
    });
    $(document).ready(function(){
        $(window).resize(function(){
     if ($(window).width()<1200){
         let widthSlideBlock = $('.content_block').width()
         let heightSlideBlock = $('.content_block').height()
         $('.red_block').width(widthSlideBlock+58)
         $('.red_block').height(heightSlideBlock+58)
         $('.violet_block').width(widthSlideBlock+58)
         $('.violet_block').height(heightSlideBlock+58)
         
     }
     if ($(window).width()<441) {
        let widthSlideBlock = $('.content_block').width()
        let heightSlideBlock = $('.content_block').height()
        $('.red_block').width(widthSlideBlock+30)
        $('.red_block').height(heightSlideBlock+30)
        $('.violet_block').width(widthSlideBlock+30)
        $('.violet_block').height(heightSlideBlock+30)
        
     }
    })
    if ($(window).width()<1200){
         let widthSlideBlock = $('.content_block').width()
         let heightSlideBlock = $('.content_block').height()
         $('.red_block').width(widthSlideBlock+58)
         $('.red_block').height(heightSlideBlock+58)
         $('.violet_block').width(widthSlideBlock+58)
         $('.violet_block').height(heightSlideBlock+58)
         
     }
     if ($(window).width()<441) {
        let widthSlideBlock = $('.content_block').width()
        let heightSlideBlock = $('.content_block').height()
        $('.red_block').width(widthSlideBlock+30)
        $('.red_block').height(heightSlideBlock+30)
        $('.violet_block').width(widthSlideBlock+30)
        $('.violet_block').height(heightSlideBlock+30)
        
     }
    })