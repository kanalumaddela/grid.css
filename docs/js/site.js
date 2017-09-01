$(".scrollTo").click(function() {
    var elem = $(this).data('section');
    $('html, body').animate({
        scrollTop: ($('#'+elem).offset().top - 10)
    }, 500);
});