// Swiper 制作事例
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
		769: {
			width:1024,
			height:768,
			slidesPerView: 3
		}
	}
});

// ヘッダーのスクロール
$(window).scroll(function() {
    if($(window).scrollTop() > 20) {
        $("#header").addClass("shadow");
    } else {
        $("#header").removeClass("shadow");
    }
});

// ハンバーガーメニュー
$(".hamburger-icon").click(function() {
    if($("#header nav").hasClass("show")) {
        $("#header nav").removeClass("show");
    } else {
        $("#header nav").addClass("show");
    }
});