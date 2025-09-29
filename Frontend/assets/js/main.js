function deferVideo() {

    //defer html5 video loading
    $("video source").each(function () {
        var sourceFile = $(this).attr("data-src");
        $(this).attr("src", sourceFile);
        var video = this.parentElement;
        video.load();
        // uncomment if video is not autoplay
        //video.play();
    });

}

window.onload = deferVideo;
$(document).ready(function () {
    $(".scrollbutton").click(function () {
        var dataRel = $(this).attr('data-rel');

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + dataRel).offset().top
        }, 2000);
    });
})

$(document).ready(function () {
    $('#toTopBtn').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

