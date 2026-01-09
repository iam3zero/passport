$(function(){
    // nav
    $('.container >ul>li').hover(function(){
        $(this).find('.dep2_container').stop().slideDown(300)
    },function(){
        $(this).find('.dep2_container').stop().slideUp(300)
    });
});