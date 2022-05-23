var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 30,
	breakpoints: {
		1024: {
			centeredSlides: false,
			spaceBetween: 0,
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
