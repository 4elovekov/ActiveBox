$(function() {


    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos  > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });



    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }/*тут ставишь запятую а потом указываешь в милисекундах сколько должна длиться анимация прим. в скобках(, 700)*/);
    });



    // Nav Toggle
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });



    // Reviews: https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider")

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});