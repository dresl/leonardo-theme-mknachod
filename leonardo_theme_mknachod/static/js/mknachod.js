$("a[href=#footer]").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 1000);
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:invisible').click();
});