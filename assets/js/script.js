$(function () {

    slider();

    $(".page-move").on("click", function () {
        let href = $.attr(this, "href");
        $('html').animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        })
    });

    function slider() {
        const mainSwiper = new Swiper(".section-intro .swiper", {
            effect: "fade",
            autoplay: true,
            navigation: {
                nextEl: ".section-intro .swiper-button-next",
                prevEl: ".section-intro .swiper-button-prev",
            },
            loop: true
        });

        const philosophySwiper = new Swiper(".section-philosophy .swiper", {
            effect: "fade",
            autoplay: true,
            loop: true
        })
    }
});