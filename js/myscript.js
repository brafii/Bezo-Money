$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
       $('header').addClass('shadow-header');
    }
    else {
       $('header').removeClass('shadow-header');
    }
});