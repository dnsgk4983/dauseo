$(function () {

    slider();

    $(".page-move").on("click", function () {
        let href = $.attr(this, "href");
        $('html').animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
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

// 스크롤 시 헤더 고정
document.addEventListener('scroll', scrollEvent);
let header = document.querySelector(".header");
let headerHeight = header.offsetHeight;
function scrollEvent() {

    if (window.scrollY > headerHeight) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

let menuController = document.querySelector(".btn-menu");
menuController.addEventListener("click", () => {
    header.classList.toggle("open");
});

// faq

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));