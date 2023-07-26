// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	// Задаем конструктор для однотипных слайдов
	function makeSwiper(target) {
		if (document.querySelector(target)) {
			new Swiper(target, {
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
					nextEl: `${target}__next`,
					prevEl: `${target}__prev`,
				},
			});
		};
	};

	// Применяем конструктор к нужным классам
	makeSwiper(".jsProductSlider");
	makeSwiper(".jsProductSliderSale");

	// Мини слайдер товаров 
	if (document.querySelector('.jsProductSliderMini')) {
		const prodSliderInner = new Swiper('.jsProductSliderMini', {
			spaceBetween: 16,
			slidesPerView: 1.2,
			loop: true,
			breakpoints: {
				400: {
					slidesPerView: 2.2,
				},
				769: {
					slidesPerView: 2,
				},
			},
			navigation: {
				nextEl: ".jsProductSliderMini__next",
				prevEl: ".jsProductSliderMini__prev",
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