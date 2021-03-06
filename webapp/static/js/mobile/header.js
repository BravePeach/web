// 모바일 헤더 에니메이션

function mobileMenu() {
    if ($('.side_menu_wrapper').css('display') == 'none'){
        $('body').css('overflow', 'hidden');
        $('.nav-guide-search-dropdown').hide('slow');
        if($('.nav-bravepeach-logo').css('display') == 'none') {
            $('.mobile-header').animate({backgroundColor: "rgb(255, 255, 255)"});
        }
    }
    else {
        $('body').css('overflow', 'auto');
        $('.nav-guide-search-dropdown').show('slow');
        if($('.nav-bravepeach-logo').css('display') == 'none') {
            $('.mobile-header').animate({backgroundColor: "rgba(255, 255, 255, 0)"});
        }
    }
    $('.side_menu_wrapper').toggle("slide", { direction: "right" })
}

function mobileSearch() {
    if ($('.search_side_menu_wrapper').css('display') == 'none'){
        $('body').css('overflow', 'hidden');
        $('.nav-menubar').hide('slow');
        if($('.nav-bravepeach-logo').css('display') == 'none') {
            $('.mobile-header').animate({backgroundColor: "rgb(255, 255, 255)"});
        }
    }
    else {
        $('body').css('overflow', 'auto');
        $('.nav-menubar').show('slow');
        if($('.nav-bravepeach-logo').css('display') == 'none') {
            $('.mobile-header').animate({backgroundColor: "rgba(255, 255, 255, 0)"});
        }
    }
    $('.search_side_menu_wrapper').toggle("slide", { direction: "left" })
}

$(function () {
    $('.find-guide-form, .find-guide-form2').click(function () {
        mobileSearch();
    });

    $(".folding").click(function(){
        var target = $(this);
        var target_class = target.attr("class").split(" ")[0];
        if(target.hasClass("folding")) {
            target.removeClass("folding");
            $(".second."+target_class).removeClass("folded");
            target.find("img").addClass("turn");
        } else {
            target.addClass("folding");
            $(".second."+target_class).addClass("folded");
            target.find("img").removeClass("turn");
        }
    });
});