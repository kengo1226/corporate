// Swiper 制作事例
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ヘッダーのスクロール
$(window).scroll(function() {
    if($(window).scrollTop() > 20) {
        $("#header").addClass("shadow");
    } else {
        $("#header").removeClass("shadow");
    }
});