// Переменная для тела документа
const body = $('body');

// Навигационный переключатель
const navToggle = $('[data-element~="navToggle"]');

// Переключение состояния навигационного меню
const toggleNav = () => {
	if (!body.hasClass('is-nav-open')) {
		body.addClass('is-nav-open');
	} else {
		body.removeClass('is-nav-open');
	}
};

// Обработка прокрутки страницы
const handleScroll = () => {
	if ($(window).scrollTop() > 0) {
		body.addClass('is-scrolled');
	} else {
		body.removeClass('is-scrolled');
	}
};

// Событие клика на навигационном переключателе
navToggle.on('click', toggleNav);

// Событие прокрутки окна
$(window).on('scroll', handleScroll);

// // прокрутка статьи
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		let destination = document.querySelector(this.getAttribute('href'));
		const header = document.querySelector('[data-element="header"]');
		if (destination) {
			let headerHeight = (header.offsetHeight + 30);
			let topOfDestination = destination.getBoundingClientRect().top + window.scrollY - headerHeight;
			window.scrollTo({ top: topOfDestination, behavior: "smooth" });
		}
	});
});

$('.form__input--tel').each(function() {
	var keyCode;

	function mask(event) {
		event.keyCode && (keyCode = event.keyCode);
		var pos = this.selectionStart;
		if (pos < 3) event.preventDefault();
		var matrix = "+7 (___) ___  ",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = $(this).val().replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, function(a) {
			return i < val.length ? val.charAt(i++) : def.charAt(i++)
			});
		i = new_value.indexOf("_");
		if (i != -1) {
			i < 5 && (i = 3);
			new_value = new_value.slice(0, i)
		}
		var reg = matrix.substr(0, $(this).val().length).replace(/_+/g,
			function(a) {
			return "\\d{1," + a.length + "}"
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test($(this).val()) || $(this).val().length < 5 || keyCode > 47 && keyCode < 58) {
			$(this).val(new_value);
		}
		if (event.type == "blur" && $(this).val().length < 5) {
			$(this).val("");
		}
	}

	$(this).on("input focus blur keydown", mask);
});

document.addEventListener("DOMContentLoaded", function () {
	// Функция создания карты
	function createMap(xID, coords) {
		const mapContainer = document.getElementById(xID);
		if (mapContainer) {
			ymaps.ready(function () {
				const myMap = new ymaps.Map(xID, {
					center: coords,
					zoom: 17,
					controls: []
				});

				const myPlacemark = new ymaps.Placemark(coords,
					{
						hintContent: 'г. Воронеж, ул. Солнечная, 13 «Е», помещение 2',
						balloonContent: 'г. Воронеж, ул. Солнечная, 13 «Е», помещение 2'
					},
					{
						iconLayout: 'default#image',
						iconImageHref: 'img/pin.svg',
						iconImageSize: [32, 43],
						iconImageOffset: [80, 0]
					}
				);

				myMap.geoObjects.add(myPlacemark);
				myMap.behaviors.disable('scrollZoom');
			});
		} else {
			console.error("Элемент с ID", xID, "не найден.");
		}
	}

	// Вызов функции создания карты
	createMap('footer__map', [51.678526, 39.164103]);
	// createMap('contacts__map', [51.678526, 39.164103]);
});

// class Tabs {
// 	constructor() {
// 		this.setTabs = this.setTabs.bind(this);
// 		this.clearTabs = this.clearTabs.bind(this);
// 	}

// 	setTabs(tabs, id) {
// 		this.clearTabs(tabs);
// 		tabs.find('[data-tab="' + id + '"]').addClass('is-active');
// 	}

// 	clearTabs(tabs) {
// 		tabs.find('[data-elements~="tabsBtn"], [data-elements~="tabsItem"]').removeClass('is-active');
// 	}
// }

$(document).on('click', '[data-elements~="tabsBtn"]', function(e) {
	let id = $(this).data('tab');
	let tabs = $(this).closest('[data-elements~="tabs"]');
	let tabContents = tabs.find('[data-tab]');

	tabContents.each(function() {
		$(this).toggleClass('is-active', id === $(this).data('tab'));
	});
});