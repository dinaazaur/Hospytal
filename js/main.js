// language change pop-up
const item = document.querySelector('.dropdown-menu');

$('.nav-changeLanguage').on('click', function () {
	$('.dropdown-menu').toggleClass("show");
});

window.onclick = function (event) {
	if (!event.target.matches('.nav-changeLanguage')) {
		item.classList.remove('show');
	}
};


// expand animation 
$(".collabse-btn").on('click',function () {
	$(".header-table").toggleClass("header-table_active");
	$(".header").toggleClass("header-active");
	$('.header_logo').toggleClass('header_logo_fix');
	$(this).toggleClass("collapsed");
});

// gallery 

// Gallery show
$('.gallery-btn').on('click',function () {
	$('.gallery').toggleClass('gallery-active');
	$('.status-btn').toggleClass('status-btn_inactive');
	$('.about-btn').toggleClass('active-about');
});

// Gallery main
$(document).on('ready',function () {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		}
	});
});

// doctor's carousel


let owl = $('.doctor-carousel');
owl.owlCarousel({
  margin: 0,
  nav: false,
  navText: ["<div class='nav-btn prev-slide'><span><i class=\"fas fa-arrow-left\"></i></span></div>", "<div class='nav-btn next-slide'><i class=\"fas fa-arrow-right\"></i></div>"],
  dots: true,
  loop: true,
  responsiveClass: true,
  responsive: {
    320: {
      items: 1,
      dotsEach: 2,
    },
    780: {
      items: 2,
      dotsEach: 2,
    },
    1024: {
      items: 3,
      dotsEach: 2,
      nav: true,
    },
    1300: {
      items: 4,
      dotsEach: 2,
      nav: true,
    }
  }
});

