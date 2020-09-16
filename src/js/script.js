$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			900: {},
		},
		items: 1,
		loop: true,
		autoHeight: true,
		margin: 10,
		responsiveClass: true,
		nav: true,
		navText: [
			'<span class="arrow-owl arrow-left"><img src="icons/prevarrow.png"></span>',
			'<span class="arrow-owl arrow-right"><img src="icons/nextarrow.png"></span>',
		],
	});

	$("ul.catalog__tabs").on(
		"click",
		"li:not(.catalog__tab_active)",
		function () {
			$(this)
				.addClass("catalog__tab_active")
				.siblings()
				.removeClass("catalog__tab_active")
				.closest("div.container")
				.find("div.catalog__content")
				.removeClass("catalog__content_active")
				.eq($(this).index())
				.addClass("catalog__content_active");
		}
	);

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on("click", function (e) {
				e.preventDefault();
				$(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
				$(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
			});
		});
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');



});
