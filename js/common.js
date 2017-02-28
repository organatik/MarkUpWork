$(function() {

    $('.dropdown,.drop-items ').click(function () {
        $('.drop-items').toggleClass('active');
        $('.dropdown i').toggleClass('openCaret')
    });
    $(".ToglleDrop").click(function () {
        $( this ).children('ul').slideToggle();
        $('.drop-menu').slideToggle();
        return false;
    
    });
    $('.header-mobile .menu i').click(function () {
        $('.mobileNav').css('display','block')
    });
    $('.CloseMobileNav').click(function () {
        $('.mobileNav').css('display','none')
    })
        
});
