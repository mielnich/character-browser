$(".hero-keep-reading").hide();

$(window).on("load", function () {

    $(".keep-reading").click(function () {
        $(".hero-keep-reading").fadeToggle("slow", function () {
            // Animation complete.
        });
    });

});
