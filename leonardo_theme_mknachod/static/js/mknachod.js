$("a[href=#footer]").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 1000);
});