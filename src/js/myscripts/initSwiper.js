// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.jsProductSlider')) {
		const prodSliderInner = new Swiper('.jsProductSlider', {
			spaceBetween: 16,
			slidesPerView: 1.2,
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				400: {
					slidesPerView: 2.2,
				},
				660: {
					slidesPerView: 3.2,
				},
				992: {
					slidesPerView: 4,
				},
			},
			navigation: {
				nextEl: ".products-slider__next",
				prevEl: ".products-slider__prev",
			},
		});
	};

};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();