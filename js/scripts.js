$(".hero-keep-reading").hide();

$(window).on("load", function() {

    $(".keep-reading").click(function() {
        $(".hero-keep-reading").slideToggle("slow", function() {
            // Animation complete.
        });
    });

});
