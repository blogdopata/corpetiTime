// You can also use "$(window).load(function() {"
$(function() {

    /* Slider para Lapirceros   */
    // Slideshow 4
    $("#slider4").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function() {
            $('.events').append("<li>after event fired.</li>");
        }
    });



    // Slideshow 5
    $("#slider5").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function() {
            $('.events').append("<li>after event fired.</li>");
        }
    });


    /* Slider para llaveros  */
    $("#slider6").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function() {
            $('.events').append("<li>after event fired.</li>");
        }
    });


    /* Slider Miscelaneas */
    $("#slider7").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function() {
            $('.events').append("<li>after event fired.</li>");
        }
    });




});